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
  id INT,
  characteristic_id INT,
  review_id INT,
  characteristic_value INT
);

CREATE TABLE product_reviews (
  id INT AUTO_INCREMENT,
  product_id INT,
  rating TINYINT NOT NULL,
  date_reviewed DATE,
  summary VARCHAR(150) NOT NULL,
  body VARCHAR(500) NOT NULL,
  recommend VARCHAR(5) NOT NULL,
  reported VARCHAR(5) NOT NULL,
  reviewer_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  response VARCHAR(500),
  helpfulness INT,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id INT,
  review_id INT,
  photo_url VARCHAR(2500),
  FOREIGN KEY (review_id) REFERENCES product_reviews(id)
);


LOAD DATA LOCAL INFILE '/Users/Emma/HackReactorApril2021/SDC_Data/reviews.csv' REPLACE INTO TABLE product_reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, product_id, rating, @var1, summary, body, recommend, reported, reviewer_name, email, response, helpfulness)
SET date_reviewed=FROM_UNIXTIME((@var1 / 1000), '%Y/%m/%d');