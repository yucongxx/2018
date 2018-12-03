/*
animate()
    JQ中的所有运动都是基于animate
    hide(0)
    delay(time)延迟

    小技巧：
    使用jq运动时可在运动前加上stop
*/

$('#btn').click(function (){
    // $('#box').hide(2000);
    // $('#box').toggle(500);//宽高+透明度
    // $('#box').slideToggle(500);//切换高
    // $('#box').stop().fadeToggle(500);//切换透明度

    // $('#box').animate({
    //     // opacity:0,
    //     width:400
    // },1000,function (){
    //     $('#box').animate({
    //         height:400,
    //         left:200
    //     },1000);
    // })

    $('#box').animate({
        width:400
    },100).delay(1000);
    $('#box').animate({
        height:400,
        left:200
    },1000);
})