var db = require('../db');
var mysql = require('mysql');


module.exports = {
  messages: {
    get: function () {
      var allMessages = db.query(`SELECT * FROM messages INNER JOIN users ON messages.u_id = users.id;`, function (err, data) {
        if (err) {
          console.log(err);
          throw err; 
        } 
        return JSON.stringify(data); 
        
      }); 

    }, // a function which produces all the messages
    post: function (message) {
      // get variable for user id using query
      db.query(`SELECT id FROM users where name ='${message.username}';`, function(err, userId) {
        if (err) {
          console.log(err);
          throw err;
        }
        db.query(`INSERT INTO messages (u_id, msg) VALUES (${userId},'${message.text}');`);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      var allUsers = db.query(`SELECT name FROM users`, function (err, data) {
        if (err) {
          console.log(err);
          throw err; 
        } 
        return JSON.stringify(data); 
        
      }); 
    },
    post: function (user) {
      console.log('Made it into model.post-------- user is: ', user);
      db.query(`INSERT INTO users (name) VALUES ('${user.username}');`, function () {
        
        db.query('SELECT * FROM users', function(err, data) {
          if (err) {
            console.log(err);
          }
          console.log(data);
        }); 
        
      });

    }
  }
};

