package com.autorecruit.user.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDTO {
    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
}
