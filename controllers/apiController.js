var Todos = require('../models/todoModel');

module.exports = function(app) {

  // API Endpoint to Get All Todos
  app.get('/api/v1/todos', function(req, res) {
    Todos.find({}, function(err, todos) {
      if (err) { throw err; }
      res.send(todos);
    });
  });

  // API Endpoint to Create or Update a Todo
  app.post('/api/v1/todo', function(req, res) {
    if (req.body._id) {
      Todos.findByIdAndUpdate(req.body._id, {
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

  // API Endpoint to Delete a Todo (ID in Body)
  app.delete('/api/v1/todo', function(req, res) {
    if (req.body._id) {
      Todos.findByIdAndRemove(req.body._id, function(err) {
        if (err) { throw err; }
        res.send('Deletion successful!');
      });
    } else {
      res.send('Nothing to delete!');
    }
  });
  
  // API Endpoint to Delete a Todo (ID in URL)
  app.delete('/api/v1/todo/:id', function(req, res) {
    Todos.findByIdAndRemove(req.params.id, function(err) {
      if (err) { throw err; }
      res.send('Deletion successful!');
    });
  });

};
