var mysql = require('mysql');
require('dotenv').config();


module.exports  = {
  con: mysql.createPool({
    connectionLimit : 100,
    host            : 13.52.181.234,
    user            : 'serverUser',
    password        : process.env.token,
    database        : 'SDCReviews'
  })
}

// module.exports = {
//   con: mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'SDCReviews'
//   })
// };

module.exports.con.getConnection((err) => {
  if (!err) {
    console.log('Server and database connected!');
  } else {
    console.log(err);
  }
});