// $('#box').mousedown(function (ev) {
//     let disX = ev.pageX - $('#box').position().left;
//     let disY = ev.pageY - $('#box').position().top;
//     console.log(this);
//     $(document).mousemove(function (ev) {
//         $('#box').css({
//             left:ev.pageX-disX,
//             top:ev.pageY-disY
//         });
//     });
//     $(document).mouseup(function (ev){
//         $(document).off();
//     });
// });


//hover

 $('#box').hover(function (){
     $(this).css('background','pink');
 },function (){
     $(this).css('background','yellow');
 });


