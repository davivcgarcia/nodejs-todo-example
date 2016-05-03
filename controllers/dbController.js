var mongoose = require('mongoose');

var mongoUri = process.env.MONGODB_URI ||
               'mongodb://mongodb:27017/nodejs-todo-example';

var mongoConnectionDelay = 2000;

function delayedConnect(delay) {
  setTimeout(function() {
    mongoose.connect(mongoUri, {server:{auto_reconnect:true}});
  }, delay);
}

var db = mongoose.connection;

db.on('connected', function() {
  console.log('Mongoose default connection established with ' + mongoUri + '.');
});

db.on('disconnected', function() {
  console.log('Mongoose default connection terminated. Trying to reconnect...');
  delayedConnect(mongoConnectionDelay);
});

db.on('error', function(error) {
  console.log('Mongoose default connection failed: ' + error);
  mongoose.disconnect();
});

delayedConnect(mongoConnectionDelay);

module.exports = mongoose.connection;
