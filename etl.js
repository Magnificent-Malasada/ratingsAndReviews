LOAD DATA LOCAL INFILE '/Users/Emma/HackReactorApril2021/SDC_Data/characteristicss.csv'
INTO TABLE characteristics_products
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '/Users/Emma/HackReactorApril2021/SDC_Data/characteristic_reviews.csv'
INTO TABLE review_characteristics
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '/Users/Emma/HackReactorApril2021/SDC_Data/reviews.csv'
INTO TABLE product_reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, product_id, rating, @var1, summary, body, recommend, reported, reviewer_name, email, response, helpfulness)
SET date_reviewed = FROM_UNIXTIME((@var1 / 1000), '%Y/%m/%d');

LOAD DATA LOCAL INFILE '/Users/Emma/HackReactorApril2021/SDC_Data/reviews_photos.csv'
INTO TABLE photos
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

ALTER TABLE photos
ADD INDEX indx_review_photo (review_id);

ALTER TABLE review_characteristics
ADD INDEX idx_review_char (review_id);

ALTER TABLE product_reviews
ADD INDEX idx_review_product_id (product_id);

ALTER TABLE characteristics_products
ADD INDEX idx_characteristic_product_id (product_id);

