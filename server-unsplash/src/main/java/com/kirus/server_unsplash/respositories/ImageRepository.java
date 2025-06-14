package com.kirus.server_unsplash.respositories;

import com.kirus.server_unsplash.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {
}