package com.autorecruit.user.repository;

import com.autorecruit.user.dto.request.UserRequestDTO;
import com.autorecruit.user.service.UserService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@Testcontainers
@DisplayName("User Repository Test")
class UserRepositoryTest {
    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres:16.2");

    @Autowired
    UserRepository underTest;
    @Autowired
    UserService userService;

    @BeforeEach
    void setUp() {
        String email = "hi@nihadgurbanov.com";
        String user = userService.createUser(new UserRequestDTO("Nihad", "Gurbanov", email));
    }

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    @DisplayName("Can establish connection")
    void canEstablishConnection() {
        // Given
        // When
        Boolean expected = postgreSQLContainer.isRunning();
        // Then
        assertEquals(expected, true);
    }

    @Test
    @DisplayName("Can save user")
    void ShouldReturnWhenExistsByEmail() {
        // Given
        // When
        Boolean expected = underTest.existsByEmail("hi@nihadgurbanov.com");
        // Then
        assertEquals(expected, true);

    }

    @Test
    @DisplayName("Should not return when existsByEmail is not present")
    void ShouldNotReturnWhenExistsByEmailIsNotPresent() {
        // Given
        // When
        Boolean expected = underTest.existsByEmail("info@nihadgurbanov.com");
        // Then
        assertEquals(expected, false);

    }
}