package com.autorecruit.user.controller;

import com.autorecruit.user.dto.request.UserRequestDTO;
import com.autorecruit.user.dto.response.UserResponseDTO;
import com.autorecruit.user.repository.UserRepository;
import com.autorecruit.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.hibernate.query.sqm.tree.SqmNode.log;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody UserRequestDTO userRequestDTO) {
        if (userRepository.existsByEmail(userRequestDTO.getEmail())) {
            throw new RuntimeException("User with email " + userRequestDTO.getEmail() + " already exists");
        }

        userService.createUser(userRequestDTO);
        return "User created successfully";
    }

    @GetMapping("/{id}")
    public UserResponseDTO getUser(@PathVariable Long id) {
        return modelMapper.map(userService.getUser(id), UserResponseDTO.class);
    }

    @GetMapping("/all")
    public List<UserResponseDTO> getAllUsers() {
        log.info("Getting all users");
        return userService.getAllUsers().stream()
                .map(user -> modelMapper.map(user, UserResponseDTO.class))
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public String updateUser(@RequestBody UserRequestDTO userRequestDTO, @PathVariable Long id) {
        userService.updateUser(userRequestDTO, id);
        return "User updated successfully";
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully";
    }
}
