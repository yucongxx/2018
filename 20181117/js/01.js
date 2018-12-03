/*
当前运动的时间：
time

总时间：
duration

总距离：
count

开始位置：
begin

time/duration*count

*/





// const box = document.getElementById('box');
// let timer = null;
// let time = 0;
// let count=500;
// let duration=10000;

// box.onclick = function () {
//     let begin=parseFloat(getComputedStyle(box).left);
//     console.log(begin);
//     count=count-begin;

//     (function animate() {
//         timer = requestAnimationFrame(animate);

//         time += 16.7;
//         if (time > duration) {
//             time = 10000;
//         }
//         box.style.left =begin+ time / duration * count + 'px';
//         if (time === duration) {
//             cancelAnimationFrame(timer);
//         }

//     })();
// }




//运动的封装5

// let onOff = false;

// document.onclick = function () {
//     if (onOff) return;
//     onOff = true;
//     move({
//         ele: box,
//         attrs: {
//             opacity: .4,
//             top: {
//                 count: '30rem',
//                 begin: 10
//             },
//             left: '500px'
//         },
//         fx: 'elasticIn',
//         moveGG: function () {
//             box.style.width='500px';
//             onOff = false;
//         }
//     });
// }



// function move(obj) {
//     let opt = {
//         ele: null,
//         attrs: {},
//         duration: 1000,
//         fx: 'linear',
//         moveMM: function () { },
//         moveGG: function () { }
//     }
//     Object.assign(opt, obj);
//     let time = 0;
//     let begin = 0;
//     let re = /px|em|rem/;
//     let j = {};
//     for (let k in opt.attrs) {
//         if (opt.attrs[k].constructor !== Object) {
//             begin = parseFloat(getComputedStyle(opt.ele)[k]);
//             // console.log(begin);
//             j[k] = {
//                 begin,
//                 count: parseFloat(opt.attrs[k]) - begin,
//                 unit: k === 'opacity' ? '' : 'px'
//             }
//         } else {
//             let unit = re.test(opt.attrs[k].count) ? opt.attrs[k].count.match(re)[0] : 'px';
//             j[k] = {
//                 begin: opt.attrs[k].begin,
//                 count: parseFloat(opt.attrs[k].count) - opt.attrs[k].begin,
//                 unit
//             }
//         }
//     }
//     console.log(j);
//     (function animate() {
//         opt.ele.timer = requestAnimationFrame(animate);
//         time += 16.7;
//         if (time > opt.duration) {
//             time = opt.duration;
//         }
//         for (let k in j) {
//             opt.ele.style[k] = Tween[opt.fx](time, j[k].begin, j[k].count, opt.duration) + j[k].unit;
//         }
//         if (time === opt.duration) {
//             cancelAnimationFrame(opt.ele.timer);
//             opt.moveGG();

//         }

//     })();
// }



//可视区的尺寸：
/*
window.innerWidth/window.innerHeight(包括滚动条的高度)
document.documentElement.clientWidth/document.docuemntElement.clientHeight

滚动的距离
window.pageXOffset/window.pageYOffset  能读
*/


// document.onclick=function (){
//     // console.log(window.pageYOffset);
//     console.log(document.documentElement.clientHeight);
//     // window.scrollTo(0,0);


// }



//DOM静态数组和动态数组

/*
之前获取元素的方法都是动态获取，只要dom发生变化，获取的变量也会发生变化

let lis=document.getElementsByTagName('li');
// let lis=ul.children;


for(let i=0; i<lis.length;i++){
  ul.appendChild(lis[i]) ;
}

*/

//事件

/*
事件:
用户操作浏览器的时候当某个条件成立触发的事务
就叫事件
元素自身就有一些事件，这些事件只是没有绑定
事件函数而已，默认null
如果元素没有某个事件，只会当做访问对象上的一个属性
而已（undefined）

用户操作页面的时候，会触发很多
的浏览器事件，只有该事件绑定了事件函数之后才会
给用户做出响应

onclick
onmouseover
onmouseout
onscroll
onresize
oninput
onchange
onload
onfocus
onblur

onmousemove
onmousedown
onmouseup
onmouseenter
onmouseleave
oncontextmenu
ondblclick
select

txt.onfocus = function () {
    console.log(1);
}
txt.onblur=function (){
    console.log(2);
}

*/

//浏览器默认行为：

/*
浏览器默认行为，自己没去实现，浏览器自带行为

DOM0
return false
ev.returnValue=false;
DOM2
ev.preventDefault()
*/


