package org.food.foodbackend.user.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.food.foodbackend.common.exception.InvalidCredentialsException;
import org.food.foodbackend.common.exception.UserAlreadyExistsException;
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
        if (userRepository.findByUserName(user.getUserName()).isPresent()) {
            throw new UserAlreadyExistsException("The username " + user.getUserName() + " is exist, please change another one!");
        }
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }

    public Long login(User user) {
        return userRepository.findByUserName(user.getUserName())
                .filter(dbUser -> passwordEncoder.matches(user.getPassword(), dbUser.getPassword()))
                .map(User::getId)
                .orElseThrow(() -> new InvalidCredentialsException("Username or password is not correct!"));
    }
}
