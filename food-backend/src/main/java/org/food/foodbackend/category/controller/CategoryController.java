package org.food.foodbackend.category.controller;

import lombok.RequiredArgsConstructor;
import org.food.foodbackend.category.dto.response.CategoryResponse;
import org.food.foodbackend.category.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryResponse>> list() {
        return ResponseEntity.ok(categoryService.list());
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadCategory(
            @RequestParam("name") String name,
            @RequestParam("file") MultipartFile file) {
        categoryService.saveCategory(name, file);
        return ResponseEntity.ok("Upload success!");
    }
}
