var express = require('express');
var path = require('path');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// var seven = require('seven-express');


var app = express();

var mongoose = require('./config/mongoose.js');
var db = mongoose();

// Gzip压缩
app.use(compression());

// 视图目录及模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 定义静态资源路径
app.use(express.static(path.join(__dirname, 'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
	secret: '8562',
	name: 'SESSIONID',
	cookie: {}, // 默认 cookie.maxAge 为 null, 即不过期
	resave: false,
	saveUninitialized: true,
}))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

// app.use('/users', users);

// require('./routes/index.js')(app);
// require('./routes/movie.js')(app)
// require('./routes/users.js')(app);


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
