var express = require('express');
var router = express.Router();
var Movie = require('../models/movie')


// 获取所有电影
router.get('/movie', function(req, res, next) {
	Movie.find({})
		.then(movies => {
			res.render('movies', {
				title : '电影列表',
				movies : movies
			})
			// res.json(movies)
		})
		.catch(err => {
			// res.json(err)
		})
});


// 添加电影
router.get('/movie/add', function(req, res, next){
	res.render('movie_add',{
		title: '添加电影'
	})
})

module.exports = router;
