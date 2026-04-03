package org.food.foodbackend.category.service;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.food.foodbackend.category.dto.response.CategoryResponse;
import org.food.foodbackend.category.entity.Category;
import org.food.foodbackend.category.repository.CategoryRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<CategoryResponse> list() {
        return categoryRepository.findAllByOrderByCountsDesc().stream()
                .map(category ->
                        CategoryResponse.builder()
                                .id(category.getId())
                                .name(category.getName())
                                .icon(category.getIcon())
                                .build())
                .toList();
    }

    @SneakyThrows
    public void saveCategory(String name, MultipartFile file) {
        if (file.isEmpty()) {
            throw new RuntimeException("File cannot be null!");
        }
        categoryRepository.save(Category
                .builder()
                .name(name)
                .icon(file.getBytes())
                .counts(0)
                .build());
    }
}
