/**
 * Created by lzm on 2018/3/15.
 */
module.exports = {
    mustLogin: function(req, res, next){
        // 如果没登录，跳到登录页，如果登录了，继续访问
        if(!req.cookies.authorized){
            res.redirect("/login");
        }else{
            next();
        }
    },
    mustNotLogin: function(req, res, next){
        // 如果登录了，跳到首页，如果没登录，继续访问
        if(req.cookies.authorized){
            res.redirect("/index");
        }else{
            next();
        }
    }
};