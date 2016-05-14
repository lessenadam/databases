var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var messages = models.messages.get(function(body) {
        console.log('MESSAGES FROM MODELS IS RETURNING----------', body);
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(body); 
      }); 
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      req.body;
      models.messages.post(req.body);
      res.writeHead(200);
      res.end();
    }
  },

  users: {
    get: function (req, res) {
      var users = models.users.get(); 
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(users);

    },
    post: function (req, res) {
      models.users.post(req.body);
      res.writeHead(200);
      res.end();
    }
  }
};

