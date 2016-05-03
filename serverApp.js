var express = require('express');
var morgan = require('morgan');

var dbConnection = require('./controllers/dbController');
var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use(morgan('tiny'));

htmlController(app);
apiController(app);

app.listen(port);
