var mysql = require('mysql');

module.exports = {
  con: mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'SDCReviews'
  })
};

module.exports.con.connect((err) => {
  if (!err) {
    console.log('Server and database connected!');
  } else {
    console.log(err);
  }
});