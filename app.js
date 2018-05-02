var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// !路由(请求路径分发)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoRouter = require('./routes/mongo');
var viewRouter = require('./routes/view');

var app = express();

// !页面引擎
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views/page'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// !静态资源根目录
app.use(express.static(path.join(__dirname, 'views')));

/*** 配置请求路径 */
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/mongo', mongoRouter);
app.use('/view', viewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
