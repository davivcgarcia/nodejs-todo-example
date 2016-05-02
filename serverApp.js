var express = require('express');
var htmlController = require('./controllers/htmlController');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

htmlController(app);

app.listen(port);
