const createError = require('http-errors');
const express = require('express'); // Loaded express framework
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const skillsDB = require('./models/skills');

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

// Implement index functionality for the skills resource
// 4. Using the router object within routes/cats.js and assuming a cats controller assigned to a variable named catsCtrl:
// Write the line of code that defines the proper route that would read/display all cats (cats index route).
// 4. router.get('/', catsCtrl.index);

// Implement show functionality for the skills resource
// 5. Write the line of code that defines the proper route that would read/display a single cat (cats show route).
// 5. router.get('/:id', catsCtrl.show)

// Identify the proper route
// Update the UI

