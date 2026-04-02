package org.food.foodbackend.user.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRequest {
    @NotBlank(message = "username cannot be blank")
    @Size(min = 4, max = 20, message = "username should between 4-20 characters")
    private String username;
    @NotBlank(message = "password cannot be blank")
    @Size(min = 8, message = "password at least require 8 characters")
    private String password;
    private String firstName;
    private String lastName;
}
