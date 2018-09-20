//외부 모듈 추출
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//사용자 정의 모듈 추출
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//서버 생성
var app = express();

// 서버 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//미들웨어 설정
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//라우터 미들웨어 설정
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', (request, response) => {
  response.render('product', {
    title: 'Product Page'
  });
});

// 404에러
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
