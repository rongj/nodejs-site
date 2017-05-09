var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config/db')
var mongoose = require('mongoose');
mongoose.connect(config.mongodb)

// var session = require('express-session');
// var seven = require('seven-express');

// var router = express.Router();

var index = require('./routes/index');
var users = require('./routes/users');
var movie = require('./routes/movie');

var app = express();

// 链接数据库
// mongoose.connect('mongodb://localhost:27017/test');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/api', movie);

app.use('/add/:name', function(req, res, next) {
	res.send('哈哈哈'+req.params.name+req.query.name)
})

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// 添加seven中间件
// seven.creator(app, router, path.join(__dirname, 'schema'));

module.exports = app;
