package com.kirus.server_unsplash.services;

import com.kirus.server_unsplash.entities.Collection;
import com.kirus.server_unsplash.entities.Image;
import com.kirus.server_unsplash.respositories.CollectionRepository;
import com.kirus.server_unsplash.respositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {
    @Autowired
    private CollectionRepository collectionRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private UnsplashService unsplashService;

    // Get all collections
    @GetMapping
    public ResponseEntity<List<Collection>> getAllCollections() {
        return  new ResponseEntity<List<Collection>>(collectionRepository.findAll(), HttpStatus.OK);
    }

    // Get a specific collection
    @GetMapping("/{collectionId}")
    public ResponseEntity<Collection> getCollection(@PathVariable Long collectionId) {
        return ResponseEntity.of(collectionRepository.findById(collectionId));
    }

    // Get images in a collection
    @GetMapping("/{collectionId}/images")
    public ResponseEntity<Set<Image>> getCollectionImages(@PathVariable Long collectionId) {
        return collectionRepository.findById(collectionId)
                .map(collection -> ResponseEntity.ok(collection.getImages()))
                .orElse(ResponseEntity.notFound().build());
    }

    // Add image to collection
    @PostMapping("/{collectionId}/images")
    public ResponseEntity<Collection> addImageToCollection(
            @PathVariable Long collectionId,
            @RequestBody Image image) {

        return collectionRepository.findById(collectionId)
                .map(collection -> {
                    // Save image if not exists
                    if (!imageRepository.existsById(image.getId())) {
                        imageRepository.save(image);
                    }

                    collection.getImages().add(image);
                    collectionRepository.save(collection);
                    return ResponseEntity.ok(collection);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Remove image from collection
    @DeleteMapping("/{collectionId}/images/{imageId}")
    public ResponseEntity<Void> removeImageFromCollection(
            @PathVariable Long collectionId,
            @PathVariable String imageId) {

        return collectionRepository.findById(collectionId)
                .map(collection -> {
                    collection.getImages().removeIf(img -> img.getId().equals(imageId));
                    collectionRepository.save(collection);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new collection
    @PostMapping
    public Collection createCollection(@RequestBody Collection collection) {
        return collectionRepository.save(collection);
    }

    @PostMapping("/{collectionId}/unsplash-images/{imageId}")
    public ResponseEntity<Collection> addUnsplashImageToCollection(
            @PathVariable Long collectionId,
            @PathVariable String imageId) {

        return collectionRepository.findById(collectionId)
                .map(collection -> {
                    // Check if image already exists in our database
                    Image image = imageRepository.findById(imageId)
                            .orElseGet(() -> {
                                // If not, fetch from Unsplash and save
                                Image newImage = unsplashService.getImageDetails(imageId);
                                return imageRepository.save(newImage);
                            });

                    collection.getImages().add(image);
                    collectionRepository.save(collection);
                    return ResponseEntity.ok(collection);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
