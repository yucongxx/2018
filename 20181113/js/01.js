/*滚动条距离：

console.log(window.pageXOffset);  只能读不能写
console.log(window.pageYOffset);

document.documentElement.scrollTop   不但能读也能写



*/





/*window.onscroll=function (){
    // console.log(document.documentElement.scrollTop);
    // console.log(window.pageYOffset);
    // console.log(document.body.scrollTop);
}

*/


// document.onclick = function () {
//     // window.pageYOffset=0;
//     // document.documentElement.scrollTop=0;
//     window.scrollTo(0,100);
// }


//回到顶部
// window.onscroll = function () {
//     if (window.pageYOffset >= 1100) {
//         box.style.display = 'block';
//     } else {
//         box.style.display = 'none';
//     }
//     box.onclick = function () {
//         let time=window.pageYOffset;
        
//         (function animat(){
//             box.timer=requestAnimationFrame(animat);
//             time-=300;
//             if(time<=0){
//                 time=0;
//             }
//             window.scrollTo(0,time);
//             console.log(time);
//             if(time===0){
//                 cancelAnimationFrame(box.timer);
                
//             }
//         })();
//     }
// }



//可视区的宽高：
/*
console.log(window.innerWidth);//计算滚动条的宽度
console.log(document.documentElement.clientWidth);//不计算滚动条的宽度

*/





