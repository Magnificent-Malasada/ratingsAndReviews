DROP DATABASE IF EXISTS SDCReviews;

CREATE DATABASE SDCReviews;

USE SDCReviews;

CREATE TABLE characteristics_products (
  id INT,
  product_id INT,
  characteristic VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE review_characteristics (
  id INT AUTO_INCREMENT,
  characteristic_id INT,
  review_id INT,
  characteristic_value INT,
  FOREIGN KEY (characteristic_id) REFERENCES characteristics_products(id)
);

CREATE TABLE product_reviews (
  id INT AUTO_INCREMENT,
  product_id INT,
  rating TINYINT NOT NULL,
  date_reviewed DATETIME DEFAULT CURRENT_TIMESTAMP,
  summary VARCHAR(150) NOT NULL,
  body VARCHAR(500) NOT NULL,
  recommend VARCHAR(5) DEFAULT 'FALSE',
  reported VARCHAR(5) NOT NULL,
  reviewer_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  response VARCHAR(500),
  helpfulness INT DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id INT,
  review_id INT,
  photo_url VARCHAR(2500),
  FOREIGN KEY (review_id) REFERENCES product_reviews(id)
);



