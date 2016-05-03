var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  task: String,
  isDone: Boolean,
});

var Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;
