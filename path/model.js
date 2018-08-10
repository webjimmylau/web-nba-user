/**
 * Created by lzm on 2018/3/4.
 * 数据模型
 */

// 链接数据库
var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'nba',                          // database数据库名
    'root',                         // username用户名
    '123',                          // password密码
    {
        'dialect': 'mysql',         // 数据库引用模块
        'host': 'localhost',        // 主机
        'port': 3306,               // 端口
        'define': {
            timestamps: false       // 禁止自动添加时间戳createAt，updateAt
        }
    }
);

// 链接具体表
var team = require('./model/team')(sequelize, Sequelize);
var player = require('./model/player')(sequelize, Sequelize);
var banner = require('./model/banner')(sequelize, Sequelize);
var user = require('./model/user')(sequelize, Sequelize);

// 创建表
//team.sync();
//player.sync();
//banner.sync();

// 暴露接口
module.exports = {
    team: team,
    player: player,
    banner: banner,
    user: user
};
