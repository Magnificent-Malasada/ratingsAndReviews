CREATE DATABASE SDCReviews;

USE SDCReviews;

CREATE TABLE reviewsMeta (
  id INT,
  username VARCHAR(30) NOT NULL,
  rating INT,
  amount_of_reviews INT,
  recomended INT,
  characteristics OBJECT,
  overall_rating INT AS (rating / amount_of_reviews),
  PRIMARY KEY(id)
)


CREATE TABLE productReviews (
  id INT AUTO_INCREMENT,
  product_id INT,
  rating OBJECT,
  summary VARCHAR(50),
  body VARCHAR(500),
  recommend BOOLEAN NOT NULL DEFAULT 0,
  response NULL,
  reviewer_name VARCHAR(30),
  helpfulness INT,
  email VARCHAR(30),
  date_reviewed DATE,
  photos OBJECT,
  FOREIGN KEY (product_id) REFERENCES reviewsMeta(id)
)