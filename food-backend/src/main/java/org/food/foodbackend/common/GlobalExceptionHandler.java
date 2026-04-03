package org.food.foodbackend.common;

import org.food.foodbackend.common.dto.ErrorResponse;
import org.food.foodbackend.common.exception.InvalidCredentialsException;
import org.food.foodbackend.common.exception.UserAlreadyExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleUserAlreadyExists(UserAlreadyExistsException e) {
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.CONFLICT.value())
                .message(e.getMessage())
                .timestamp(LocalDateTime.now().format(formatter))
                .build();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<ErrorResponse> handleInvalidCredentials(InvalidCredentialsException e) {
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.UNAUTHORIZED.value())
                .message(e.getMessage())
                .timestamp(LocalDateTime.now().format(formatter))
                .build();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException e) {
        String message = e.getBindingResult().getFieldErrors().stream()
                .map(error -> error.getField().toUpperCase() + ": " + error.getDefaultMessage())
                .reduce((a, b) -> a + ", " + b)
                .orElse("Validation failed");

        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .message(message)
                .timestamp(LocalDateTime.now().format(formatter))
                .build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<ErrorResponse> handleNoResourceFoundException(Exception e) {
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.NOT_FOUND.value())
                .message(e.getMessage())
                .timestamp(LocalDateTime.now().format(formatter))
                .build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception e) {
        System.out.println("e = " + e);
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .message("An unexpected error occurred")
                .timestamp(LocalDateTime.now().format(formatter))
                .build();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}

