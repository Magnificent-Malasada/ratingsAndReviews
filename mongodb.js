const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let productReviewSchema = mongoose.Schema({
  reviews: [{
    review_id: Number,
    product_id: Number,
    rating: Number,
    summary: String,
    recommend: Boolean,
    response: null,
    body: String,
    date: Date,
    reviewer_name: String,
    helpfulness: Boolean,
    photos: Object,
    email: String,
    characteristics: Object
  }]
})

let productReviewMetaSchema = mongoose.Schema({
  product_id: Number,
  rating: Number,
  recommended: Number,
  characteristics: Object,
  reviews: Array
})

let productReviews = mongoose.model('productReview', productReviewSchema);
let productReviewMetaData = mongoose.model('productReviewMeta', productReviewMetaSchema);

