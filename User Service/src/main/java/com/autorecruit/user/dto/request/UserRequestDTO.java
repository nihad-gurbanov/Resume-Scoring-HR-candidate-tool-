package com.autorecruit.user.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UserRequestDTO {

    private String firstName;
    private String lastName;
    private String email;
}
