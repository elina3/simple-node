'use strict';
/**
 * Module dependencies.
 */
var  init = require('./config/init')(),
  config = require('./config/config');

// Init the express application
var app = require('./config/express')(config);

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

console.log('========================Simple-node Test Server=====================');
console.log('Simple-node Test Server!');
console.log('enviroment:', process.env.NODE_ENV);

console.log('Simple-node application started on address ' + config.serverAddress);
console.log('Simple-node application started on port ' + config.port);



