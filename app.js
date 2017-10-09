var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');

var router = require('./api/router');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    // req.app.get('env') === 'development' ? err : {};

    res.send(err)
});

module.exports = app;