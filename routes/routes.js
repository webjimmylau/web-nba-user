/**
 * Created by lzm on 2018/3/4.
 * 路由文件配置
 */
var pageIndex = require('./index');
var pageLogin = require('./login');
var pageTeam = require('./team');
var pagePlayer = require('./player');

module.exports = function (app) {
    app.use('/', pageIndex);
    app.use('/login', pageLogin);
    app.use('/team', pageTeam);
    app.use('/player', pagePlayer);

};
