var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var fs = require('fs');
var session = require('express-session');
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

app.use('/', indexRouter);
app.use('/lists', listRouter);
app.use('/spaces', spaceRouter);
app.use('/tasks', taskRouter);
app.use('/users', usersRouter);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require('./models')
/* passport */
// session config
app.use(
  session({
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: 'some salt',
    resave: true,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy( (userID, password, done) => {
  console.log('user data', userID, password);
  models.users.authorize(userID, password)
    .then(userIdInformation => {
      console.log(userIdInformation);
      // 認証に成功したらユーザ情報を返す
      return done(null, userIdInformation);
    })
    .catch( err => {
      console.log(err);
      req.flash('login_error', err);
      return done(null, false);
    });
}));

app.post('/login',
    passport.authenticate('local'),
    (req, res) => {
      console.log('next func start')
      res.redirect(Authenticator.redirect.success);
      const user = req.user;
      res.render('user', {
        user: user
      });
        // 認証成功するとここが実行される
    }
);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('yeah');
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
