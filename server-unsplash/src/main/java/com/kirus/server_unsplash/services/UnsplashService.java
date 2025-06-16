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

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Objects;
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

        Objects.requireNonNull(response.getBody(), "Unsplash API response body is null");
        return response.getBody().getResults().stream()
                .map(this::convertToImage)
                .collect(Collectors.toList());
    }

    public Image getImageDetails(String imageId) {
        String url = String.format("https://api.unsplash.com/photos/%s?client_id=%s",
                imageId, accessKey);

        ResponseEntity<UnsplashPhoto> response = restTemplate.exchange(
                url, HttpMethod.GET, null, UnsplashPhoto.class);

        Objects.requireNonNull(response.getBody(), "Unsplash API response body is null");
        return convertToImage(response.getBody());
    }

    private Image convertToImage(UnsplashPhoto photo) {
        Image image = new Image();
        image.setId(photo.getId());
        image.setUrl(photo.getUrls().getRegular());
        image.setAuthorName(photo.getUser().getName());
        image.setAuthorUsername(photo.getUser().getUsername());
        // Fix for null published_at error
        if (photo.getCreatedAt() != null) {
            try {
                // Parse ISO8601 string to Date
                LocalDateTime ldt = LocalDateTime.parse(photo.getCreatedAt(), DateTimeFormatter.ISO_DATE_TIME);
                image.setPublishedAt(Timestamp.valueOf(ldt).toLocalDateTime());
            } catch (Exception e) {
                image.setPublishedAt(LocalDateTime.now());
            }
        } else {
            // Use current time as fallback if Unsplash doesn't provide a date
            image.setPublishedAt(LocalDateTime.now());
        }
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
        private String createdAt; // Changed from LocalDateTime to String
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