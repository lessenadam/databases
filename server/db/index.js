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


var query = function(queryString, callback) {
  connection.query(queryString, callback); 
};

exports.query = query;

