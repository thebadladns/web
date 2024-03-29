var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var vhost = require('vhost');

var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var storiesRouter = require('./routes/stories');
var apiRouter = require('./routes/api');

// var subdomain = require('express-subdomain');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// top-level domain redirect
app.use(vhost('crljmb.com', function(req, res, next) { req.url = "/about/crljmb"; next(); }));
// any.crljmb.com redirect
app.use(vhost('*.crljmb.com', function(req, res, next) { req.url = "/about/crljmb"; next(); }));

app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/stories', storiesRouter);
app.use('/api', apiRouter);

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

// app.use(subdomain('the', indexRouter));
// app.use(subdomain('api', apiRouter));

module.exports = app;
