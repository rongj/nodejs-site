var Movie = require('../controller/movie')


module.exports = function (app) {
	app.get('/movies', Movie.getMovieList);
	app.get('/movie', Movie.getMovieById);
	app.post('/movie', Movie.addMovie);
};
