var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var fs = require('fs');

var app = express();

// logging
var FileStreamRotator = require('file-stream-rotator');
//var logDirectory = __dirname + '/log/access_log';
//fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

//var accessLogStream = FileStreamRotator.getStream({
//  filename: logDirectory + '/access-%DATE%.log',
//  frequency: 'daily',
//  verbose: false,
//  date_format: "YYYY-MM-DD"
//});
//app.use(morgan('combined', {stream: accessLogStream}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// rooting
const indexRouter = require('./routes/index.js');
const listRouter = require('./routes/lists.js');
const spaceRouter = require('./routes/space.js');
const taskRouter = require('./routes/tasks.js');
const usersRouter = require('./routes/users.js');

// mapping
app.use('/', indexRouter);
app.use('/lists', listRouter);
app.use('/spaces', spaceRouter);
app.use('/tasks', taskRouter);
app.use('/users', usersRouter);


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
