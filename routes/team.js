/**
 * Created by lzm on 2018/3/4.
 * 路由文件配置
 */

var express = require('express');
var router = express.Router();
var check = require('../auth/check');
var config  = require('../config/config');
var Message = require('../path/model');

// 球队列表
router.get('/', check.mustLogin, function (req, res) {
    Message.team.findAll({limit : 12, order : 'id asc'}).then(function (data) {
        res.render('team', {
            title: '球队',
            href: '/team',
            nav: config.nav,
            data: data
        });
    });
});

// 添加球队 get
router.get('/add', check.mustLogin, function (req, res) {
    res.render('teamAdd', {
        title: '添加球队',
        href: '/team',
        nav: config.nav
    });
});

// 添加球队 post
router.post('/add', check.mustLogin, function (req, res) {
    Message.team.create({
        teamName: req.body.teamName,
        teamPic: req.body.teamPic
    }).then(function(data){
        console.log(data);
        res.redirect('/team');
    });
});

// 编辑球队 get
router.get('/edit?', check.mustLogin, function (req, res) {
    Message.team.findOne({
        where:{
            id: req.query.id
        }
    }).then(function (data) {
        res.render('teamEdit', {
            title: '编辑球队',
            href: '/team',
            nav: config.nav,
            data: data
        })
    });
});

// 编辑球队 post
router.post('/edit?', check.mustLogin, function (req, res) {
    var obj = {
        teamName: req.body.teamName,
        teamPic: req.body.teamPic
    };
    Message.team.update(obj, {
        where:{
            id: req.query.id
        }
    }).then(function (data) {
        console.log(data);
        res.redirect('/team');
    });
});

// 删除球队 get
router.get('/delete?', check.mustLogin, function (req, res) {
    Message.team.destroy({
        where:{
            id: req.query.id
        }
    }).then(function (data) {
        console.log(data);
        res.redirect('/team');
    });
});

module.exports = router;
