/**
 * Created by lzm on 2018/3/4.
 * 主文件
 */

var express = require('express');
var app = express();
var routes = require('./routes/routes');
var path = require('path');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// 设置模板引擎
app.set('views', './views');
app.set('view engine', 'jade');

// 设置静态路径
app.use(express.static(path.join(__dirname, 'public')));

// 解析 req.body application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// cookie
app.use(cookieParser());

// 调用路由
routes(app);

module.exports = app;