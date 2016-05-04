var mongoose = require('mongoose');

var mongoUri = process.env.MONGODB_URI ||
               'mongodb://mongodb:27017/nodejs-todo-example';

var mongoConnectionDelay = 2000;

function delayedConnect(delay) {
  setTimeout(function() {
    mongoose.connect(mongoUri);
  }, delay);
}

mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection established with ' + mongoUri + '.');
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection terminated. Trying to reconnect...');
  delayedConnect(mongoConnectionDelay);
});

mongoose.connection.on('error', function(error) {
  console.log('Mongoose default connection failed: ' + error);
  mongoose.disconnect();
});

delayedConnect(mongoConnectionDelay);

module.exports = mongoose.connection;
