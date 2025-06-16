package com.kirus.server_unsplash.services;

import com.kirus.server_unsplash.entities.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/unsplash")
public class UnsplashController {
    @Autowired
    private UnsplashService unsplashService;

    @GetMapping("/search")
    public List<Image> searchImages(@RequestParam String query) {
        return unsplashService.searchImages(query);
    }

    @GetMapping("/photos/{imageId}")
    public Image getImageDetails(@PathVariable String imageId) {
        return unsplashService.getImageDetails(imageId);
    }
}
