package com.kirus.server_unsplash.respositories;

import com.kirus.server_unsplash.entities.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CollectionRepository extends JpaRepository<Collection, Long> {
    List<Collection> findByNameContainingIgnoreCase(String name);
}