package org.food.foodbackend.food.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FoodRequest {
    private Long categoryId;
    private String name;
    private String description;
    private MultipartFile file;
}
