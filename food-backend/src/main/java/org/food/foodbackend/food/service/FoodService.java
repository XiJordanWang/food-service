package org.food.foodbackend.food.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.food.foodbackend.food.dto.request.FoodRequest;
import org.food.foodbackend.food.entity.Food;
import org.food.foodbackend.food.repository.FoodRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodService {

    private final FoodRepository foodRepository;

    public List<Food> get() {
        return foodRepository.findAll();
    }


    @SneakyThrows
    @Transactional
    public void saveFood(FoodRequest request) {
        byte[] bannerBytes = request.getFile().getBytes();

        Food food = Food.builder()
                .categoryId(request.getCategoryId())
                .name(request.getName())
                .description(request.getDescription())
                .banner(bannerBytes)
                .build();

        foodRepository.save(food);
    }
}
