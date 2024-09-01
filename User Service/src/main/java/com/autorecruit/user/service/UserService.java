package com.autorecruit.user.service;

import com.autorecruit.user.dto.request.UserRequestDTO;
import com.autorecruit.user.dto.response.UserResponseDTO;
import java.util.List;

public interface UserService {
    String createUser(UserRequestDTO userRequestDTO);
    UserResponseDTO getUser(Long id);
    List<UserResponseDTO> getAllUsers();
    String updateUser(UserRequestDTO userRequestDTO, Long id);
    String deleteUser(Long id);
}
