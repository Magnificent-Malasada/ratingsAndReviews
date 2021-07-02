const queries = require('./queries.js');
const formatData = require('./formatData.js');
module.exports = {
  get: (productID, res) => {
    queries.getReviews(productID, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let rawData = data;
        let formattedData = formatData.formatData(rawData[0], rawData[1]);

        res.send(formattedData);
      }
    })
  },
  put: (req, res) => {
    queries.flagReview(req.params.review_id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    })
  },
  patch: (req, res) => {
    queries.updateHelpful(req.params.review_id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    })
  },
  post: (req, res) => {
    queries.addReview(req.body.product_id, req.body.rating, req.body.summary, req.body.body, req.body.recommend, req.body.name, req.body.email, req.body.characteristics, req.body.photos, (err, data) => {
     if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
    })
  }
}