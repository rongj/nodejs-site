var mongoose = require('mongoose')

var movieSchema = mongoose.Schema({
	verbose : String,
	title : String,
	poster : String,
	other_info : String,
	rank : String,
	rate : String,
	link : String,
	quote : String
})


module.exports = mongoose.model('Movie', movieSchema)