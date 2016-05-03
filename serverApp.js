var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

var app = express();
var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGODB_URI ||
               'mongodb://localhost:27017/nodejs-todo-example';

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use(morgan('tiny'));

mongoose.connect(mongoUri);

htmlController(app);
apiController(app);

app.listen(port);
