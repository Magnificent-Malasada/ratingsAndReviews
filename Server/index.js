const express = require('express');
const app = express();
const port = 3002;
const askDB = require('../requestData.js');

app.use(express.json());
app.listen(3002, (req, res) => {
  console.log(port);
})

app.get('/reviews', (req, res) => {
  askDB.get(req, res);
  console.log(req.body);
})