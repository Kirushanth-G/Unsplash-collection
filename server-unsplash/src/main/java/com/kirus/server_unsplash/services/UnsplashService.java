package com.kirus.server_unsplash.services;

import com.kirus.server_unsplash.entities.Image;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UnsplashService {

    @Value("${unsplash.access.key}")
    private String accessKey;

    private final RestTemplate restTemplate;

    public UnsplashService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public List<Image> searchImages(String query) {
        String url = String.format("https://api.unsplash.com/search/photos?query=%s&client_id=%s",
                query, accessKey);

        ResponseEntity<UnsplashSearchResponse> response = restTemplate.exchange(
                url, HttpMethod.GET, null, UnsplashSearchResponse.class);

        assert response.getBody() != null;
        return response.getBody().getResults().stream()
                .map(this::convertToImage)
                .collect(Collectors.toList());
    }

    public Image getImageDetails(String imageId) {
        String url = String.format("https://api.unsplash.com/photos/%s?client_id=%s",
                imageId, accessKey);

        ResponseEntity<UnsplashPhoto> response = restTemplate.exchange(
                url, HttpMethod.GET, null, UnsplashPhoto.class);

        assert response.getBody() != null;
        return convertToImage(response.getBody());
    }

    private Image convertToImage(UnsplashPhoto photo) {
        Image image = new Image();
        image.setId(photo.getId());
        image.setUrl(photo.getUrls().getRegular());
        image.setAuthorName(photo.getUser().getName());
        image.setAuthorUsername(photo.getUser().getUsername());
        image.setPublishedAt(photo.getCreatedAt());
        image.setDownloadUrl(photo.getLinks().getDownload());
        return image;
    }

    // DTO classes for Unsplash API responses

    @Setter
    @Getter
    public static class UnsplashSearchResponse {
        private List<UnsplashPhoto> results;

    }

    @Setter
    @Getter
    public static class UnsplashPhoto {

        private String id;
        private UnsplashUrls urls;
        private UnsplashUser user;
        private LocalDateTime createdAt;
        private UnsplashLinks links;
    }

    @Setter
    @Getter
    public static class UnsplashUrls {
        private String regular;

    }

    @Setter
    @Getter
    public static class UnsplashUser {
        private String name;
        private String username;

    }

    @Setter
    @Getter
    public static class UnsplashLinks {
        private String download;

    }
}