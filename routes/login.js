/**
 * Created by lzm on 2018/3/4.
 * 路由文件配置
 */

var express = require('express');
var router = express.Router();
var check = require('../auth/check');
var config  = require('../config/config');
var Message = require('../path/model');

router.get('/', check.mustNotLogin, function (req, res) {
    res.render('login', {
        title: '登录界面',
        fail: false
    });
});
router.post('/', check.mustNotLogin, function (req, res) {
    Message.user.findAll().then(function(data){
        for(var i = 0, len = data.length; i < len; i++){
            if(data[i].userName == req.body.userName && data[i].password == req.body.password){
                res.cookie('authorized', req.body.userName);
                res.redirect('/index');
            }
        }
        res.render('login', {
            title: '登录界面',
            fail: true
        })

    });
});

module.exports = router;
