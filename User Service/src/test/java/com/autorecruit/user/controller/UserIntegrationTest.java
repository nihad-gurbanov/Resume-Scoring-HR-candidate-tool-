package com.autorecruit.user.controller;

import com.autorecruit.user.dto.request.UserRequestDTO;
import com.autorecruit.user.dto.response.UserResponseDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;

import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.http.HttpMethod.*;

@Testcontainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserIntegrationTest {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres:16.2");

    @Test
    @DisplayName("Can establish connection")
    void canEstablishConnection() {
        // Given
        boolean expectedCreation = postgreSQLContainer.isCreated();
        boolean expectedRun = postgreSQLContainer.isRunning();
        // Then
        assertTrue(expectedCreation);
        assertTrue(expectedRun);
    }

    @Autowired
    TestRestTemplate testRestTemplate;

    // Helper method to create headers
    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

    @Test
    @DisplayName("Can register user")
    void register() {
        // Given
        UserRequestDTO userRequestDTO = new UserRequestDTO(
                "Nihad", "Gurbanov", "hello@nihadgurbanov.com");

        HttpHeaders headers = createHeaders();
        HttpEntity<UserRequestDTO> request = new HttpEntity<>(userRequestDTO, headers);

        // When
        ResponseEntity<String> response = testRestTemplate.exchange(
                "/api/user/register",
                POST,
                request,
                String.class
        );

        // Then
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("User created successfully", response.getBody());

        ResponseEntity<List<UserResponseDTO>> allUsers = testRestTemplate.exchange(
                "/api/user/all",
                GET,
                null,
                new ParameterizedTypeReference<List<UserResponseDTO>>() {
                });

        assertEquals(HttpStatus.OK, allUsers.getStatusCode(), "All users endpoint should return 200 OK");

        UserResponseDTO userResponseDTO = Objects.requireNonNull(allUsers.getBody())
                .stream()
                .filter(u -> u.getEmail().equals(userRequestDTO.getEmail()))
                .findFirst()
                .orElseThrow();

        assertEquals(userRequestDTO.getFirstName(), userResponseDTO.getFirstName());
        assertEquals(userRequestDTO.getLastName(), userResponseDTO.getLastName());
        assertEquals(userRequestDTO.getEmail(), userResponseDTO.getEmail());

        List<UserResponseDTO> userResponseDTOS = allUsers.getBody();
        assertNotNull(userResponseDTOS);
    }

    @Test
    @DisplayName("Can get user by id and update")
    void updateUser() {
        // Given
        UserRequestDTO userRequestDTO = new UserRequestDTO(
                "Nihad", "Gurbanov", "hi@nihadgurbanov.com");

        HttpHeaders headers = createHeaders();
        HttpEntity<UserRequestDTO> request = new HttpEntity<>(userRequestDTO, headers);

        // Register User
        ResponseEntity<String> response = testRestTemplate.exchange(
                "/api/user/register",
                POST,
                request,
                String.class
        );

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("User created successfully", response.getBody());

        ResponseEntity<List<UserResponseDTO>> allUsers = testRestTemplate.exchange(
                "/api/user/all",
                GET,
                null,
                new ParameterizedTypeReference<List<UserResponseDTO>>() {
                });

        Long userId = Objects.requireNonNull(allUsers.getBody())
                .stream()
                .filter(u -> u.getEmail().equals(userRequestDTO.getEmail()))
                .findFirst()
                .orElseThrow()
                .getUserId();

        String newEmail = "hithere@nihadgurbanov.com";

        // Update user
        HttpEntity<UserRequestDTO> updateRequest = new HttpEntity<>(new UserRequestDTO("Nihad", "Gurbanov", newEmail), headers);
        ResponseEntity<String> updateResponse = testRestTemplate.exchange(
                "/api/user/" + userId,
                HttpMethod.PUT,
                updateRequest,
                String.class
        );

        assertTrue(updateResponse.getStatusCode().is2xxSuccessful());

        // Get updated user
        ResponseEntity<UserResponseDTO> userByIdResponse = testRestTemplate.exchange(
                "/api/user/" + userId,
                GET,
                null,
                new ParameterizedTypeReference<UserResponseDTO>() {
                }
        );

        assertEquals(HttpStatus.OK, userByIdResponse.getStatusCode());
        assertEquals(newEmail, Objects.requireNonNull(userByIdResponse.getBody()).getEmail());
    }

    @Test
    void deleteUser() {
        // Given
        UserRequestDTO userRequestDTO = new UserRequestDTO(
                "Nihad", "Gurbanov", "hi@nihadgurbanov.com");

        HttpHeaders headers = createHeaders();
        HttpEntity<UserRequestDTO> request = new HttpEntity<>(userRequestDTO, headers);

        // Register User
        ResponseEntity<String> response = testRestTemplate.exchange(
                "/api/user/register",
                POST,
                request,
                String.class
        );

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("User created successfully", response.getBody());

        ResponseEntity<List<UserResponseDTO>> allUsers = testRestTemplate.exchange(
                "/api/user/all",
                GET,
                null,
                new ParameterizedTypeReference<List<UserResponseDTO>>() {
                });

        Long userId = Objects.requireNonNull(allUsers.getBody())
                .stream()
                .filter(u -> u.getEmail().equals(userRequestDTO.getEmail()))
                .findFirst()
                .orElseThrow()
                .getUserId();

        // Delete user
        ResponseEntity<String> deleteResponse = testRestTemplate.exchange(
                "/api/user/" + userId,
                DELETE,
                null,
                String.class
        );

        assertTrue(deleteResponse.getStatusCode().is2xxSuccessful());
        assertEquals("User deleted successfully", deleteResponse.getBody());

        // Attempt to delete again, should fail
        ResponseEntity<String> secondDeleteResponse = testRestTemplate.exchange(
                "/api/user/" + userId,
                DELETE,
                null,
                String.class
        );

        assertEquals(HttpStatus.NOT_FOUND, secondDeleteResponse.getStatusCode());
        assertEquals("User with id " + userId + " not found", secondDeleteResponse.getBody());

        // Check if user still exists
        ResponseEntity<String> userByIdResponse = testRestTemplate.exchange(
                "/api/user/" + userId,
                GET,
                null,
                String.class
                );

        assertEquals(HttpStatus.NOT_FOUND, userByIdResponse.getStatusCode());
    }
}
