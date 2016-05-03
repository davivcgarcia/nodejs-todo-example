var bodyParser = require('body-parser');
var Todos = require('../models/todoModel');

module.exports = function(app) {

  app.use(bodyParser.json());

  app.get('/api/v1/todos', function(req, res) {
    Todos.find({}, function(err, todos) {
      if (err) { throw err; }
      res.send(todos);
    });
  });

  app.post('/api/v1/todo', function(req, res) {
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        task: req.body.task,
        isDone: req.body.isDone,
      }, function(err, todo) {
        if (err) { throw err; }
        res.send('Update successful!');
      });
    } else {
      var newTodo = Todos({
        task: req.body.task,
        isDone: req.body.isDone,
      });
      newTodo.save(function(err) {
        if (err) { throw err; }
        res.send('Creation successful!');
      });
    }
  });

  app.delete('/api/v1/todo', function(req, res) {
    Todos.findByIdAndRemove(req.body.id, function(err) {
      if (err) { throw err; }
      res.send('Deletion successful!');
    });
  });

};
