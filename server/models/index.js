var db = require('../db');
var mysql = require('mysql');


module.exports = {
  messages: {
    get: function (callback) {
      return allMessages = db.query(`SELECT messages.msg, users.name, messages.id FROM messages INNER JOIN users ON messages.u_id = users.id;`, function (err, data) {
        if (err) {
          console.log(err);
          throw err; 
        }
        for (var i = 0; i < data.length; i++) {
          data[i].username = data[i].name;
          data[i].text = data[i].msg;
          data[i].objectId = data[i].id; 
          delete data[i].msg;
          delete data[i].name;
          delete data[i].id; 
        }
        var fullResults = {results:data}; 
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
        console.log(userId);
        console.log('LENGTH IS----------', userId.length);
        if (userId.length === 0) {
          module.exports.users.post(message, function (err, data) {
            if (err) {
              console.log(err);
            }
            module.exports.messages.post(message);
          }); 
        } else {
          console.log(userId); 
          db.query(`INSERT INTO messages (u_id, msg) VALUES (${userId[0].id},'${message.message}');`);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
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
        return JSON.stringify(fullResults); 
        
      }); 
    },
    post: function (user, callback) {
      db.query(`INSERT INTO users (name) VALUES ('${user.username}');`, function (err, data) {
        if (err) {
          console.log(err);
        }
        if (callback) {
          callback(err, data);
        }
      });

    }
  }
};

