package org.food.foodbackend.food.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.food.foodbackend.food.dto.request.FoodRequest;
import org.food.foodbackend.food.entity.Food;
import org.food.foodbackend.food.service.FoodService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
@RequiredArgsConstructor
public class FoodController {

    private final FoodService foodService;

    @GetMapping
    public ResponseEntity<List<Food>> get() {
        return ResponseEntity.ok(foodService.get());
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> upload(@ModelAttribute FoodRequest request) {
        foodService.saveFood(request);
        return ResponseEntity.ok("Upload success!");
    }
}
