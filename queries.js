const db = require('./dqlDB.js');

module.exports = {
  getReviews (product, callback) {
    db.con.query(`SELECT product_reviews.id, product_reviews.product_id, rating, date_reviewed, summary, body, recommend, reported, reviewer_name, email, response, helpfulness, photo_url FROM product_reviews LEFT JOIN photos ON product_reviews.id = photos.review_id WHERE product_id = ${product};`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let reviewData = data;
        db.con.query(`SELECT characteristic_id, characteristic_value, characteristic FROM review_characteristics INNER JOIN characteristics_products ON review_characteristics.characteristic_id = characteristics_products.id WHERE characteristics_products.product_id = ${product};`, (err, charData) => {
          if (err) {
            callback(err);
          } else {
            callback(null, [reviewData, charData]);
          }
        });
      }
    });
  },
  updateHelpful (review_id, callback) {
    db.con.query(`UPDATE product_reviews SET helpfulness = helpfulness + 1 WHERE id = ${review_id}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, 'Thanks for your feedback!');
      }
    })
  },
  flagReview (review_id, callback) {
    db.con.query(`UPDATE product_reviews SET reported = 'true' WHERE id = ${review_id}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, 'This review has been flagged.')
      }
    })
  },
  addReview (productID, rating, summary, body, recommend, reviewerName, email, characteristicObj, photoArr, callback) {
    db.con.query('INSERT INTO product_reviews (product_id, rating, summary, body, recommend, reviewer_name, email) VALUES (?,?,?,?,?,?,?)', [productID, rating, summary, body, recommend, reviewerName, email], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        db.con.query("SELECT id FROM product_reviews ORDER BY id DESC LIMIT 1;", (err, revID) => {
          if (err) {
            console.log(err);
          } else {
            let reviewNum = revID[0].id;
            Object.keys(characteristicObj).map(characteristic => {
              let rating = characteristicObj[characteristic];
              db.con.query(`INSERT INTO review_characteristics (characteristic_id, review_id, characteristic_value) VALUES (${characteristic}, ${reviewNum}, ${rating});`, (err) => {
                if (err) {
                  console.log(err);
                }
              })
            })
            photoArr.map(photoOBJ => {
              db.con.query(`INSERT INTO photos (review_id, photo_url) VALUES (${reviewNum}, ${photoOBJ[url]})`, (err) => {
                if (err) {
                  console.log(err)
                }
              })
            })
            callback(null, 'Review added!');
          }
        })
      }
    })
  }

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

//BEGIN;
//INSERT INTO product_reviews (product_id, rating, date_reviewed, summary, body, recommend, reported, reviewer_name, email, response, helpfulness)
//VALUES (?);
//SELECT LAST_INSERT_ID() INTO @review_id_var;
//INSERT INTO photos (review_id, photo_url)
//VALUES (@review_id_var, ?);
//INSERT INTO review_characteristics (characteristic_id, review_id, characteristic_value)
//values (?, @review_id_var, ?);
//COMMIT;

//INSERT INTO product_reviews (product_id, rating, date_reviewed, summary, body, recommend, reported, reviewer_name, email, response, helpfulness)
//VALUES (?)

//INSERT INTO photos (photo_url)
//VALUES (?)

//INSERT INTO review_characteristics (characteristic_value, characteristic_id)
//VALUES (?, SELECT characteristic_id FROM characteristics_products WHERE characteristic = ?)