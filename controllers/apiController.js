var bodyParser = require('body-parser');
var Todos = require('../models/todoModel');

module.exports = function(app) {

  app.use(bodyParser.json());

  app.get('/api/v1/todos', function(req, res) {
    Todos.find({}, function(err, todos) {
      if(err) throw err;
      res.send(todos);
    });
  });

};
