var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req);
      var messages = models.messages.get(); 
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(messages);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = ''; 
      req.on('data', function(err, data) {
        body += data; 
      }).on('end', function() {
        models.messages.post(JSON.parse(body));
        // if waiting for promise
        // when getting response, write res, and said res
        res.writeHead(200);
        res.end();
      });
     // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var users = models.users.get(); 
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(users);

    },
    post: function (req, res) {
      console.log('INSIDE THE MODEL----TRYING TO POST USERNAME');
      var body = ''; 
      req.on('data', function(err, data) {
        body += data; 
      }).on('end', function() {
        console.log('my data is--------', body);
        models.users.post(JSON.parse(body));
          // if waiting for promise
        // when getting response, write res, and said res
        res.writeHead(200);
        res.end();
      });

    }
  }
};

