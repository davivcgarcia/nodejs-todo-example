var express = require('express');
var mongoose = require('mongoose');
var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

var app = express();
var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nodejs-todo-example'

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

mongoose.connect(mongoUri, function(error) {
  if (error) throw error;
});

htmlController(app);
apiController(app);

app.listen(port);
