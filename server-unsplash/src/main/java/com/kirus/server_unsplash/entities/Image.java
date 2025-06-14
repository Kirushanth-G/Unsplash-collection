package com.kirus.server_unsplash.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "images")
public class Image {

    @Id
    private String id;

    private String url;
    @Column(name = "author_name")
    private String authorName;
    @Column(name = "author_username")
    private String authorUsername;
    @Column(name = "published_at")
    private LocalDateTime publishedAt;
    @Column(name = "download_url")
    private String downloadUrl;
}
