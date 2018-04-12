var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var cors = require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'test',
  name: 'sylBack',
  cookie: {
    maxAge: 80000
  },
  resave: false,
  saveUninitialized: true
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


var users = require('./routes/users');
var address = require('./routes/address');
var language = require('./routes/language');
var unzip = require('unzip');

var extract = unzip.Extract({
    path: __dirname + '/public/test'
});
var fs = require('fs');

extract.on('error', function(err) {

      console.log("error++++++++++++++++++++++");

      console.log(err);

//解压异常处理

});

extract.on('finish', function() {
    console.log('解压完成，准备读取文件');
    fs.readdir(__dirname + '/public/test',function(err,files) {
        console.log(files);
    })
});
var request = require('request');
var a = request('http://yyssb.ifitmix.com/1016/5d25106e87e448a0908a83295e413e7b.zip').pipe(fs.createWriteStream(__dirname + '/public/test.zip'));
a.on('finish',function() {
    console.log('下载完成，准备解压');
    fs.createReadStream(__dirname + '/public/test.zip').pipe(extract);
});


app.use(function(req,res,next) {
  if(!req.session.locale) {
    req.session.locale = 'zh';
  }
  next();
});
app.use('/api/users', users);
app.use('/api/address', address);
app.use('/api/language',language);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
