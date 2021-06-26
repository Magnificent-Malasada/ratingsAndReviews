const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let productReviewSchema = mongoose.Schema({
  product_id: Number,
  reviews: [{
    review_id: Number,
    rating: Number,
    summary: String,
    recommend: Boolean,
    response: null,
    body: String,
    date: Date,
    reviewer_name: String,
    helpfulness: Boolean,
    photos: [],
    email: String,
    characteristics: [{
      characteristic_name: String,
      characteristic_value: Number
    }]
  }]
})

let productReviewMetaSchema = mongoose.Schema({
  product_id: Number,
  rating: Number,
  recommended: Number,
  characteristics: {},
  number_of_reviews: Number
})

let productReviews = mongoose.model('productReview', productReviewSchema);
let productReviewMetaData = mongoose.model('productReviewMeta', productReviewMetaSchema);

