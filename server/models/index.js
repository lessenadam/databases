var db = require('../db');
var mysql = require('mysql');


module.exports = {
  messages: {
    get: function (callback) {
      console.log('In messages.get'); 
      return allMessages = db.query(`SELECT messages.msg, users.name FROM messages INNER JOIN users ON messages.u_id = users.id;`, function (err, data) {
        if (err) {
          console.log(err);
          throw err; 
        }
        console.log('Messages.get request successful from MYSQL----DATA is: ', data);
        for (var i = 0; i < data.length; i++) {
          data[i].username = data[i].name;
          data[i].text = data[i].msg;
          delete data[i].msg;
          delete data[i].name;
        }
        var fullResults = {results:data}; 
        console.log(JSON.stringify(fullResults)); 
        console.log('THIS IS THE LAST THING YOULL SEE');

        callback(JSON.stringify(fullResults)); 
        
      }); 

    }, // a function which produces all the messages
    post: function (message) {
      // get variable for user id using query
      db.query(`SELECT id FROM users where name ='${message.username}';`, function(err, userId) {
        if (err) {
          console.log(err);
          throw err;
        }
        db.query(`INSERT INTO messages (u_id, msg) VALUES (${userId[0].id},'${message.message}');`);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('In users.get'); 
      return allUsers = db.query(`SELECT name FROM users`, function (err, data) {
        if (err) {
          console.log(err);
          throw err; 
        } 
        data.forEach(data, function(row) {
          row.username = row.name;
          delete row.name;
        }); 
        
        var fullResults = {results:data};
        console.log(fullResults); 
        return JSON.stringify(fullResults); 
        
      }); 
    },
    post: function (user) {
      db.query(`INSERT INTO users (name) VALUES ('${user.username}');`, function (err, data) {
        if (err) {
          console.log(err);
        }
        db.query('SELECT * FROM users', function(err, data) {
          if (err) {
            console.log(err);
          }
        }); 
        
      });

    }
  }
};

