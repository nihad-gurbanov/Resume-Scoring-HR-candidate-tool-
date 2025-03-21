package com.autorecruit.user.dto.response;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDTO {
    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
}
