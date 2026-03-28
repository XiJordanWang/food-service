package org.food.foodbackend.user.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.food.foodbackend.user.dto.UserRequest;
import org.food.foodbackend.user.entity.User;
import org.food.foodbackend.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserRequest request) {
        userService.register(User.builder()
                .userName(request.getUserName())
                .password(request.getPassword())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .build());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody UserRequest request) {
        Long id = userService.login(User.builder()
                .userName(request.getUserName())
                .password(request.getPassword())
                .build());
        return ResponseEntity.ok(id);
    }
}

