var mongoose = require('mongoose')
var config = require('./db.js')

module.exports = function(){
	var db = mongoose.connect(config.mongodb);
	require('../model/movie.js');
	require('../model/user.js');
	return db;
}