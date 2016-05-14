var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'fj',
  database : 'cb'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting to db');
    console.log(err);
    return;
  }
  console.log('connected success');
});


connection.end(function (err) {
  // body...
  console.log('successfully ended connection');
});
// exports.connection; 

// var query = function(queryString, callback) {
//   connection.connect();
//   // connection.query(queryString, function(err, data) {
//     // callback(err, data);
//   connection.end();
//   });  



// module.exports = connection;


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// exports.query = query;

