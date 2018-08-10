window.onload = function() {
    var mySwiper = new Swiper('.swiper-container',{
        loop: true,                                 // 无限循环切换
        autoplay: 3000,                             // 自动切换的时间间隔
        speed: 1000,                                // 滑动速度
        autoplayDisableOnInteraction: false,        // 手动切换后，不要停止自动切换
        //followFinger : false,                       // 不要实时拖动切换
        pagination : '.pagination',                 // 添加圈圈切换UI
        paginationClickable :true,                  // 圈圈能点击切换
    });
};