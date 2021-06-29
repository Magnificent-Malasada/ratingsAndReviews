var mysql = require('mysql');


module.exports  = {
  con: mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password        : 'password',
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