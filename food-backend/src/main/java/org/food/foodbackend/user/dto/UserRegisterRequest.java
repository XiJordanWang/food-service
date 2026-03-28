package org.food.foodbackend.user.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRegisterRequest {
    @NotBlank(message = "Username cannot be blank!")
    @Size(min = 4, max = 20, message = "Username should between 4-20 characters!")
    private String userName;
    @NotBlank(message = "Password cannot be blank!")
    @Size(min = 8, message = "Password at least require 8 characters!")
    private String password;
    private String firstName;
    private String lastName;
}
