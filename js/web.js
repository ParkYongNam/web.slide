$(function () {
    //setInterval,animate, appendTo ,css
    //setInterval(function(){},3000)
    //$(태그).css(스타일,스타일값)
    //$(태그).animate({},spped,function(){})
    //$(태그).appendTo($(부모가 될 태그))

    const aniw = $(".swiper-slide").height();  //$(".swiper-slid").css("witdh");

    setInterval(function () {
        $(".swiper-wrapper").animate({ "marginTop": -aniw }, 400, function () {
            $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
            $(".swiper-wrapper").css("marginTop", 0)
        })
    }, 3000)
})