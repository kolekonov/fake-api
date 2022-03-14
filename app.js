let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');

let app = express();


let corsOptions = {
  // origin: 'http://localhost123:3000/',
  // optionsSuccessStatus: 200
}

app.use(cors({
  origin: 'http://localhost:3000/',
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.get('/test/', cors(), function (req, res, next) {
  // res.json({msg: 'This is CORS-enabled for a Single Route'})
  
  const products = {
    id: 1,
    image: '/public/images/product1.png',
    title: 'Cantilever chair',
    scu: ['green', 'pink', 'blue'],
    article: 'Y523201',
    price: 42.00,
  };
  res.send(JSON.stringify(products));
})

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
