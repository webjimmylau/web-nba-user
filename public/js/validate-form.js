/**
 * Created by lzm on 2018/3/14.
 */
$(function() {
    $("#teamAdd, #teamEdit").validate({
        rules: {
            teamName: {
                required: true,
                rangelength: [2, 16]
            },
            teamPic: {
                required: true,
                rangelength: [6, 16]
            },
        },
        messages: {
            teamName: {
                required: "请输入球队名称",
                rangelength: "球队名称由2~16个字符组成"
            },
            teamPic: {
                required: "请输入球队标志",
                rangelength: "球队标志由6~16个字符组成"
            },
        }
    })
});