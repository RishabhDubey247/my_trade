var createError = require('http-errors');
const flash = require('connect-flash');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {sequelize} = require('./src/models');
const WebSocket = require('ws');
sequelize.authenticate({ logging: false }).then(function (errors) { errors ? console.log(errors) : console.log('Process Database Queries') });
sequelize.sync({ force: false, alter: true, logging: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });
  (async () => {
    try {
      console.log("DB CONNECTED SUCCESSFULLY")// Call the function to establish a database connection
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  })();
var indexRouter = require('./src/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jade');
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
