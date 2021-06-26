const queries = require('./queries.js');

module.exports = {
  get: (req, res) => {
    queries.getReviews(req.body.product_id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let reviews = data;
        res.send(data);
        // queries.getCharacteristics(req.body.product_id, (err, charData) => {
        //   if (err) {
        //     console.log(err);
        //   } else {

        //   }
        // })
      }
    })
  }
}