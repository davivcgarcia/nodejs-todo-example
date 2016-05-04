var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dbConnection = require('./controllers/dbController');
var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

htmlController(app);
apiController(app);

app.listen(port);
