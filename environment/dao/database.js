//打开mongodb的连接
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/f35';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});