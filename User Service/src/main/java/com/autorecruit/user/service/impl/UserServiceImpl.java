package com.autorecruit.user.service.impl;

import com.autorecruit.user.dto.request.UserRequestDTO;
import com.autorecruit.user.dto.response.UserResponseDTO;
import com.autorecruit.user.entity.User;
import com.autorecruit.user.exception.UserNotFoundException;
import com.autorecruit.user.repository.UserRepository;
import com.autorecruit.user.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public String createUser(UserRequestDTO userRequestDTO) {
        if (userRepository.existsByEmail(userRequestDTO.getEmail())) {
            return "User with email " + userRequestDTO.getEmail() + " already exists";
        } else {
            userRepository.save(modelMapper.map(userRequestDTO, User.class));
        }
        return "User created successfully";
    }

    @Override
    public UserResponseDTO getUser(Long id) {
        return modelMapper.map(userRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("User with id " + id + " not found")
        ), UserResponseDTO.class);
    }

    @Override
    public List<UserResponseDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> modelMapper.map(user, UserResponseDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public String updateUser(UserRequestDTO userRequestDTO, Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("User with id " + id + " not found"));

        // Update only if non-null and different
        if (userRequestDTO.getFirstName() != null && !userRequestDTO.getFirstName().equals(user.getFirstName())) {
            user.setFirstName(userRequestDTO.getFirstName());
        }
        if (userRequestDTO.getLastName() != null && !userRequestDTO.getLastName().equals(user.getLastName())) {
            user.setLastName(userRequestDTO.getLastName());
        }
        if (userRequestDTO.getEmail() != null && !userRequestDTO.getEmail().equals(user.getEmail())) {
            user.setEmail(userRequestDTO.getEmail());
        }

        userRepository.save(user);

        return "User updated successfully";
    }


    @Override
    public String deleteUser(Long id) {
        boolean exists = userRepository.existsById(id);
        if (!exists) {
            throw new UserNotFoundException("User with id " + id + " not found");
        }
        userRepository.deleteById(id);

        return "User deleted successfully";
    }
}
