CREATE TABLE collections (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE images (
    id VARCHAR(255) PRIMARY KEY, -- Unsplash image ID
    url VARCHAR(255) NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    author_username VARCHAR(255) NOT NULL,
    published_at TIMESTAMP NOT NULL,
    download_url VARCHAR(255) NOT NULL
);

CREATE TABLE collection_images (
    collection_id INTEGER REFERENCES collections(id) ON DELETE CASCADE,
    image_id VARCHAR(255) REFERENCES images(id) ON DELETE CASCADE,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (collection_id, image_id)
);