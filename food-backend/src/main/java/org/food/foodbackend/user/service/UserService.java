package org.food.foodbackend.user.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.food.foodbackend.common.exception.InvalidCredentialsException;
import org.food.foodbackend.common.exception.UserAlreadyExistsException;
import org.food.foodbackend.user.dto.response.UserResponse;
import org.food.foodbackend.user.entity.User;
import org.food.foodbackend.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void register(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException("The username " + user.getUsername() + " is exist, please change another one!");
        }
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }

    public UserResponse login(User user) {
        return userRepository.findByUsername(user.getUsername())
                .filter(dbUser -> passwordEncoder.matches(user.getPassword(), dbUser.getPassword()))
                .map(userDb -> {
                    return UserResponse.builder()
                            .id(userDb.getId())
                            .firstName(userDb.getFirstName())
                            .lastName(userDb.getLastName())
                            .build();
                })
                .orElseThrow(() -> new InvalidCredentialsException("Username or password is not correct!"));
    }
}
