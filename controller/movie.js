var mongoose = require('mongoose')

var Movie = mongoose.model('Movie')

exports.getMovieList = function (req, res) {
	Movie.find({}, function (err, doc) {
		if (err) {
			res.json({ 'status': 'error', 'msg': err })
		}else {
			res.json({ 'status':'success', 'data': doc })
		}
	})
}

exports.getMovieById = function (req, res) {
    var movieid = req.body.id;
	Movie.findOne({_id:movieid}, function (err, doc) {
		if (err) {
			res.json({ 'status': 'error', 'msg': err })
		} else {
			res.json({ 'status':'success', 'data': doc })
		}
	})
}

exports.addMovie = function (req, res) {
	var verbose = req.body.verbose;
	var title = req.body.title;
	var poster = req.body.poster;
	var other_info = req.body.other_info;
	var rank = req.body.rank;
	var rate = req.body.rate;
	var link = req.body.link;
	var quote = req.body.quote;
	var newMovie = new Movie({
		verbose: verbose,
		title: title,
		poster: poster,
		other_info: other_info,
		rank: rank,
		rate: rate,
		link: link,
		quote: quote
	});
	newMovie.save(function (err) {
		if(err){
		    res.json({"status":"error"})
		}else{
		    res.json({"status":"success"});
		}
	})
}