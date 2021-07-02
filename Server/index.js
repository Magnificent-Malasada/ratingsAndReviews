const express = require('express');
const app = express();
const port = 3002;
const askDB = require('./requestData.js');

app.use(express.json());
app.listen(3002, (req, res) => {
  console.log(port);
})
// app.use('/', (req, res) => {
//   console.log(req.body);
// })

app.get('/reviews/product_id=:id', (req, res) => {
  let pathComponents = req.params.id.split('&');
  let productID = pathComponents[0];

  askDB.get(productID, res);
})

app.put('/reviews/:review_id/report', (req, res) => {
  askDB.put(req, res);
})

app.patch('/reviews/:review_id/helpful', (req, res) => {
  askDB.patch(req, res);
})

app.post('/reviews/product_id=:id', (req, res) => {
  console.log(req.body);
  askDB.post(req, res);
})