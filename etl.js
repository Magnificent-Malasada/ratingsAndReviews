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