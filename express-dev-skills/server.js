const createError = require('http-errors');
const express = require('express'); // Loaded express framework
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const skillsDB = require('./models/skill');

// First require file then... 
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

//Create an application that runs express to use for our routing 
const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pipeline
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ...Second mount the router object 
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

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



// (1) Identify the proper route
// GET - /post/:id - Read a specific post - Typical Controller Action: show
// (2) Update UI for Show Route 
// (3.1) Define "/skills/:id route" in routes
// (3.2) Set up the callback function in controller
// (3.3) Export callback function



