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
// connection.query('INSERT INTO users (name) VALUES ("hi")', function(err, data) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('successfully inserted data');
//   console.log(data);
//   connection.query('select name from users', function(err, data) {
//     if (err) {
//       console.log(err);
//     }
//     console.log('successfully pulled data');
//     console.log(data);
//   });
// });


// connection.end(function (err) {
//   // body...
//   console.log('successfully ended connection');
// });
// exports.connection; 

var query = function(queryString, callback) {
  console.log('Inside the query function');
  console.log('query is', queryString);
  // connection.query(queryString, callback(err, data));  
  connection.query(queryString, callback); 
};

// query('string here', function(err, data) {
//   // if err
//     // log
//   // do something with data
//   query('other string here maybe with subset of data', function(err, data) {

//   })
// })

// module.exports = connection;


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.query = query;

