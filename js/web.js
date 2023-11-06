$(function () {
    //setInterval,animate, appendTo ,css
    //setInterval(function(){},3000)
    //$(태그).css(스타일,스타일값)
    //$(태그).animate({},spped,function(){})
    //$(태그).appendTo($(부모가 될 태그))

    let count = 0;

    setInterval(feadani, 3000)
    function feadani() {
        count++;
        count = count % $(".swiper-slide").length
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
    }
})