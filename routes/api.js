var Movie = require('../controller/movie')

var router = require('express').Router()

router.get('/movies', Movie.getMovieList);
router.get('/movie', Movie.getMovieById);
router.post('/movie', Movie.addMovie);

module.exports = router;
