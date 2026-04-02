package org.food.foodbackend.category.service;

import lombok.RequiredArgsConstructor;
import org.food.foodbackend.category.dto.response.CategoryResponse;
import org.food.foodbackend.category.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<CategoryResponse> list() {
        return categoryRepository.findAll().stream().map(category ->
                        CategoryResponse.builder()
                                .id(category.getId())
                                .name(category.getName())
                                .icon(category.getIcon())
                                .build())
                .toList();
    }
}
