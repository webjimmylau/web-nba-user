/**
 * Created by lzm on 2018/3/4.
 * 路由文件配置
 */

var express = require('express');
var router = express.Router();
var check = require('../auth/check');
var config  = require('../config/config');
var Message = require('../path/model');

router.get('/', check.mustLogin, function (req, res) {
    Message.banner.findAll().then(function(data){
        res.render('index', {
            title: '首页',
            href: '/index',
            nav: config.nav,
            data: data
        });
    });
});
router.get('/index', check.mustLogin, function (req, res) {
    Message.banner.findAll().then(function(data){
        res.render('index', {
            title: '首页',
            href: '/index',
            nav: config.nav,
            data: data
        });
    });
});

module.exports = router;
