/**
 * Created by lzm on 2018/3/4.
 * 路由文件配置
 */

var express = require('express');
var router = express.Router();
var check = require('../auth/check');
var Message = require('../path/model');
var config  = require('../config/config');

router.get('/', check.mustLogin, function (req, res) {
    Message.player.findAll().then(function (data) {
        res.render('player', {
            title: '球员',
            href: '/player',
            nav: config.nav,
            data: data
        });
    });
});

module.exports = router;
