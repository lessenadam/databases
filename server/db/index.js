var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost:3000',
  user     : 'root',
  password : 'fj',
  database : 'cb'
});

connection.connect();

module.exports = connection;


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


