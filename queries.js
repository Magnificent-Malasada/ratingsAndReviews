const db = require('./dqlDB.js');

module.exports = {
  getReviews (product, callback) {
    db.con.query(`SELECT rating, date_reviewed, summary, body, recommend, reported, reviewer_name, email, response, helpfulness, photo_url FROM product_reviews LEFT JOIN photos ON product_reviews.id = photos.review_id WHERE product_id = ${product};`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let reviewData = data;
        db.con.query(`SELECT characteristic_value, characteristic FROM review_characteristics INNER JOIN characteristics_products ON review_characteristics.characteristic_id = characteristics_products.id WHERE characteristics_products.product_id = ${product};`, (err, charData) => {
          if (err) {
            callback(err);
          } else {
            callback(null, [reviewData, charData]);
          }
        });
        //callback(null, data);
      }
    });
  },
  // getCharacteristics (product, callback) {
  //   db.con.query(`SELECT characteristic_value, characteristic FROM review_characteristics INNER JOIN characteristics_products ON review_characteristics.characteristic_id = characteristics_products.id WHERE characteristics_products.product_id = ${product};`, (err, data) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  // }
}

//RETRIEVE CHARACTERISTIC RATINGS FOR A PRODUCT

//SELECT characteristic_value, characteristic
//FROM review_characteristics
//INNER JOIN characteristics_products
//ON review_characteristics.characteristic_id = characteristics_products.id
//WHERE characteristics_products.product_id = 6831;


//RETRIEVE REVIEWS FOR A PRODUCT

//SELECT *
//FROM product_reviews
//LEFT JOIN photos
//ON product_reviews.id = photos.review_id
//WHERE product_id = productID;


//update helpfullness

//UPDATE product_reviews
//SET helpfulness = helpfulness + 1
//WHERE id = 39686;


//update flagged

//UPDATE product_reviews
//SET reported = true
//WHERE id = 39686;

//ADD REVIEW

//INSERT INTO product_reviews (product_id, rating, date_reviewed, summary, body, recommend, reported, reviewer_name, email, response, helpfulness)
//VALUES (?)

//INSERT INTO photos (photo_url)
//VALUES (?)

//INSERT INTO review_characteristics (characteristic_value)
//VALUES (?, SELECT characteristic_id FROM characteristics_products WHERE characteristic = ?)