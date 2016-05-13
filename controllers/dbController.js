var mongoose = require('mongoose');

var mongoUri = process.env.MONGODB_URI || 'mongodb://mongodb:27017/nodejs-todo-example';

var mongoConnectionDelay = process.env.MONGODB_WAIT || 2000;

// Function to encapsulate delayed connect method
function delayedConnect(delay) {
  setTimeout(function() {
    mongoose.connect(mongoUri);
  }, delay);
}

// Event Handler for MongoDB Connection
mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection established with ' + mongoUri + '.');
});

// Event Handler for MongoDB Disconnection
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection terminated. Trying to reconnect...');
  delayedConnect(mongoConnectionDelay);
});

// Event Handler for MongoDB Connection Error (with auto-reconnect)
mongoose.connection.on('error', function(error) {
  console.log('Mongoose default connection failed: ' + error);
  mongoose.disconnect();
});

delayedConnect(mongoConnectionDelay);

module.exports = mongoose.connection;
