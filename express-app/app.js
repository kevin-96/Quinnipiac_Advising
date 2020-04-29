var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var mongoose = require("mongoose"), assert = require("assert");
var cors = require('cors');


var config = require("./config");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;


mongoose.connect(config.mongoUrl, { useNewUrlParser: true });
//open a connection and get a db handler
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

var studentListRouter = require('./routes/studentListRouter');
var loginRouter = require('./routes/loginRouter');
var courseValidatorRouter = require('./routes/courseValidatorRouter');
var studentsRouter = require('./routes/studentPageRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//3- add passport config
var User = require("./models/user"); //we will create this model to support users
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate())); //user.authenticated will be exported by  user model it will use passport-user-mongoose
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, "public")));

app.use('/users', loginRouter);
app.use('/schedule', courseValidatorRouter);
app.use('/advisor', studentListRouter);
app.use('/students',studentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  }); //4- change here from render.json
});

module.exports = app;