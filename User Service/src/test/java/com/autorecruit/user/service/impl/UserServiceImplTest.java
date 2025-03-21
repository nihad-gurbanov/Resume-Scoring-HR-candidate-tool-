package com.autorecruit.user.service.impl;

import com.autorecruit.user.dto.request.UserRequestDTO;
import com.autorecruit.user.dto.response.UserResponseDTO;
import com.autorecruit.user.entity.User;
import com.autorecruit.user.exception.UserNotFoundException;
import com.autorecruit.user.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @InjectMocks
    private UserServiceImpl underTest;

    @Mock
    private UserRepository userRepository;

    @Mock
    private ModelMapper modelMapper;

    private AutoCloseable closeable;

    @Captor
    ArgumentCaptor<User> userArgumentCaptor;


    @BeforeEach
    void setUp() {
        closeable = MockitoAnnotations.openMocks(this);
        underTest = new UserServiceImpl(userRepository, modelMapper);
    }

    @AfterEach
    void tearDown() throws Exception {
        closeable.close();
        userRepository.deleteAll();
    }

    @Test
    @DisplayName("Should create user")
    void shouldCreateUser() {
        // given
        UserRequestDTO userDto = new UserRequestDTO("John", "Doe", "test@gmail.com");
        User user = new User(1L, "John", "Doe", "test@gmail.com");

        // Mock repository behavior
        // when
        when(userRepository.existsByEmail(userDto.getEmail())).thenReturn(false);
        when(modelMapper.map(userDto, User.class)).thenReturn(user);

        String result = underTest.createUser(userDto);

        // then
        verify(userRepository).existsByEmail(userDto.getEmail());
        verify(userRepository).save(userArgumentCaptor.capture()); // Capture the user that was saved to the repository
        User capturedUser = userArgumentCaptor.getValue();

        // Assertions
        assertEquals(userDto.getFirstName(), capturedUser.getFirstName(), "First names should match");
        assertEquals(userDto.getLastName(), capturedUser.getLastName(), "Last names should match");
        assertEquals(userDto.getEmail(), capturedUser.getEmail(), "Emails should match");
        assertEquals("User created successfully", result, "The result message should be correct");
    }

    @Test
    @DisplayName("Should not create user")
    void shouldNotCreateUser() {
        // given
        UserRequestDTO userDto = new UserRequestDTO("John", "Doe", "test@gmail.com");
        User user = new User(1L, "John", "Doe", "test@gmail.com");

        // Mock repository behavior
        // when
        when(userRepository.existsByEmail(userDto.getEmail())).thenReturn(true);

        String result = underTest.createUser(userDto);

        // then
        verify(userRepository).existsByEmail(userDto.getEmail());
        verify(userRepository, Mockito.never()).save(user);

        // Assertions
        assertEquals("User with email " + userDto.getEmail() + " already exists",
                result, "The result message should be correct");
    }

    @Test
    @DisplayName("Should get user")
    void shouldGetUser() {
        // given
        User user = new User(1L, "John", "Doe", "test@gmail.com");
        UserResponseDTO expectedUserDto = UserResponseDTO
                .builder()
                .userId(1L)
                .firstName("John")
                .lastName("Doe")
                .email("test@gmail.com")
                .build();


        // Mock repository behavior
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(modelMapper.map(user, UserResponseDTO.class)).thenReturn(expectedUserDto);

        // when
        UserResponseDTO result = underTest.getUser(1L);

        // then
        assertEquals(expectedUserDto.getUserId(), result.getUserId(), "User IDs should match");
        assertEquals(expectedUserDto.getFirstName(), result.getFirstName(), "First names should match");
        assertEquals(expectedUserDto.getLastName(), result.getLastName(), "Last names should match");
        assertEquals(expectedUserDto.getEmail(), result.getEmail(), "Emails should match");

        // Verify repository method call
        verify(userRepository).findById(1L);

        // Verify modelMapper.map method call
        verify(modelMapper).map(user, UserResponseDTO.class);

        // Verify no other interactions with userRepository or modelMapper
        verifyNoMoreInteractions(userRepository);
        verifyNoMoreInteractions(modelMapper);
    }

    @Test
    @DisplayName("Should throw UserNotFoundException when user is not found")
    void shouldThrowUserNotFoundException() {
        // given
        Long userId = 1L;

        // Mock repository behavior
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        // when and then
        UserNotFoundException exception = assertThrows(UserNotFoundException.class, () -> {
            underTest.getUser(userId);
        });

        // Assertions
        assertEquals("User with id " + userId + " not found", exception.getMessage(), "Exception message should match");

        // Verify repository method call
        verify(userRepository).findById(userId);

        // Verify no interactions with modelMapper
        verifyNoInteractions(modelMapper);

        // Verify no other interactions with userRepository or modelMapper
        verifyNoMoreInteractions(userRepository);
        verifyNoMoreInteractions(modelMapper);
    }

    @Test
    @DisplayName("Should get all users")
    void ShouldGetAllUsers() {
        // given
        User user1 = new User(1L, "John", "Doe", "test@gmail.com");
        User user2 = new User(2L, "Jane", "Doe", "test@outlook.com");

        UserResponseDTO userResponseDTO1 = UserResponseDTO
                .builder().userId(1L)
                .firstName("John")
                .lastName("Doe")
                .email("test@gmail.com")
                .build();

        UserResponseDTO userResponseDTO2 = UserResponseDTO
                .builder().userId(1L)
                .firstName("John")
                .lastName("Doe")
                .email("test@outlook.com")
                .build();
        List<User> users = List.of(user1, user2);

        when(userRepository.findAll()).thenReturn(users);
        when(modelMapper.map(user1, UserResponseDTO.class)).thenReturn(userResponseDTO1);
        when(modelMapper.map(user2, UserResponseDTO.class)).thenReturn(userResponseDTO2);

        // when
        List<UserResponseDTO> result = underTest.getAllUsers();

        // then
        assertEquals(2, result.size(), "The size of the result list should be 2");
        assertEquals(userResponseDTO1, result.get(0), "The first user should match");
        assertEquals(userResponseDTO2, result.get(1), "The second user should match");

        verify(userRepository).findAll();
        verify(modelMapper).map(user1, UserResponseDTO.class);
        verify(modelMapper).map(user2, UserResponseDTO.class);

        verifyNoMoreInteractions(userRepository);
        verifyNoMoreInteractions(modelMapper);
    }


    @Test
    @DisplayName("Should update the user's first name successfully")
    void shouldUpdateUserFirstName() {
        // given
        Long userId = 1L;
        User existingUser = User.builder()
                .userId(userId)
                .firstName("John")
                .lastName("Doe")
                .email("john.doe@example.com")
                .build();

        UserRequestDTO userRequestDTO = UserRequestDTO.builder()
                .firstName("Jane")
                .build();

        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        // when
        String result = underTest.updateUser(userRequestDTO, userId);

        // then
        assertEquals("User updated successfully", result, "The result message should be correct");
        assertEquals("Jane", existingUser.getFirstName(), "The first name should be updated");
        assertEquals("Doe", existingUser.getLastName(), "The last name should remain unchanged");
        assertEquals("john.doe@example.com", existingUser.getEmail(), "The email should remain unchanged");

        // Verify interactions
        verify(userRepository).findById(userId);
        verify(userRepository).save(existingUser);

        // ModelMapper should not be used in this case since we're updating manually
        verifyNoInteractions(modelMapper);
    }


    @Test
    @DisplayName("Should update the user's last name successfully")
    void shouldUpdateUserLastName() {
        // given
        Long userId = 1L;
        User existingUser = User.builder()
                .userId(userId)
                .firstName("John")
                .lastName("Doe")
                .email("john.doe@example.com")
                .build();

        UserRequestDTO userRequestDTO = UserRequestDTO.builder()
                .lastName("Kate")
                .build();

        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        // when
        String result = underTest.updateUser(userRequestDTO, userId);

        // then
        assertEquals("User updated successfully", result, "The result message should be correct");
        assertEquals("Kate", existingUser.getLastName(), "The last name should be updated");
        assertEquals("John", existingUser.getFirstName(), "The first name should remain unchanged");
        assertEquals("john.doe@example.com", existingUser.getEmail(), "The email should remain unchanged");

        // Verify interactions
        verify(userRepository).findById(userId);
        verify(userRepository).save(existingUser);

        // ModelMapper should not be used in this case since we're updating manually
        verifyNoInteractions(modelMapper);
    }

    @Test
    @DisplayName("Should update the user's email successfully")
    void shouldUpdateUserEmail() {
        // given
        Long userId = 1L;
        User existingUser = User.builder()
                .userId(userId)
                .firstName("John")
                .lastName("Doe")
                .email("john.doe@example.com")
                .build();

        UserRequestDTO userRequestDTO = UserRequestDTO.builder()
                .email("mr.doe@example.com")
                .build();

        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        // when
        String result = underTest.updateUser(userRequestDTO, userId);

        // then
        assertEquals("User updated successfully", result, "The result message should be correct");
        assertEquals("Doe", existingUser.getLastName(), "The last name should remain unchanged");
        assertEquals("John", existingUser.getFirstName(), "The first name should remain unchanged");
        assertEquals("mr.doe@example.com", existingUser.getEmail(), "The email should be updated");

        // Verify interactions
        verify(userRepository).findById(userId);
        verify(userRepository).save(existingUser);

        // ModelMapper should not be used in this case since we're updating manually
        verifyNoInteractions(modelMapper);
    }

    @Test
    @DisplayName("Should update all user fields successfully")
    void shouldUpdateAllUserFields() {
        // given
        Long userId = 1L;
        User existingUser = User.builder()
                .userId(userId)
                .firstName("John")
                .lastName("Doe")
                .email("john.doe@example.com")
                .build();

        UserRequestDTO userRequestDTO = UserRequestDTO.builder()
                .firstName("Jane")
                .lastName("M. Doe")
                .email("mr.doe@example.com")
                .build();
        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        // when
        String result = underTest.updateUser(userRequestDTO, userId);

        // then
        assertEquals("User updated successfully", result, "The result message should be correct");

        verify(userRepository).save(existingUser);
        assertEquals("Jane", existingUser.getFirstName(), "The first name should be updated");
        assertEquals("M. Doe", existingUser.getLastName(), "The last name  be updated");
        assertEquals("mr.doe@example.com", existingUser.getEmail(), "The email should be updated");

        // ModelMapper should not be used in this case since we're updating manually
        verifyNoInteractions(modelMapper);
    }


    @Test
    @DisplayName("Should throw UserNotFoundException if user does not exist")
    void shouldThrowUserNotFoundExceptionWhenUserNotFound() {
        // given
        Long userId = 1L;
        UserRequestDTO userRequestDTO = UserRequestDTO.builder()
                .firstName("Jane")
                .lastName("Smith")
                .email("jane.smith@example.com")
                .build();

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        // when & then
        UserNotFoundException thrownException = assertThrows(UserNotFoundException.class,
                () -> underTest.updateUser(userRequestDTO, userId),
                "Expected updateUser() to throw UserNotFoundException, but it didn't");

        assertEquals("User with id " + userId + " not found", thrownException.getMessage(),
                "The exception message should be correct");

        verify(userRepository).findById(userId);
        verifyNoInteractions(modelMapper);
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    @DisplayName("Should delete user successfully")
    void shouldDeleteUser() {
        // given
        Long userId = 1L;

        when(userRepository.existsById(userId)).thenReturn(true);

        // when
        String result = underTest.deleteUser(userId);

        // then
        assertEquals("User deleted successfully", result, "The result message should be correct");

        verify(userRepository).existsById(userId);
        verify(userRepository).deleteById(userId);
    }

    @Test
    @DisplayName("Should throw UserNotFoundException when deleting non-existent user")
    void shouldThrowUserNotFoundExceptionWhenDeletingNonExistentUser() {
        // given
        Long userId = 1L;

        when(userRepository.existsById(userId)).thenReturn(false);

        // when & then
        UserNotFoundException thrownException = assertThrows(UserNotFoundException.class,
                () -> underTest.deleteUser(userId),
                "Expected deleteUser() to throw UserNotFoundException, but it didn't");

        assertEquals("User with id " + userId + " not found", thrownException.getMessage(),
                "The exception message should be correct");

        verify(userRepository).existsById(userId);
        verify(userRepository, never()).deleteById(userId);
    }
}