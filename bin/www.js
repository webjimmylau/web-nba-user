/**
 * Created by lzm on 2018/3/4.
 * 创建服务
 */

var http = require('http');
var app = require('../app.js');

http.createServer(app).listen(3000, function(){
    console.log('server success for port 3000');
});
