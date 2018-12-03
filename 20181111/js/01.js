//运动
/*
由于主流屏幕刷新率都在620hz，因此渲染一帧的时间就必须控制在
16.7m才能保证不掉帧

let num = 0;
setInterval(() => {
    num += 5;
    box.style.left = num + 'px';
}, 16.7);


setInterval(() => {
    box.style.left = box.offsetLeft + 5 + 'px';
}, 16.7);
*/

/*
    *t: time 已过时间
    *b: begin 起始值
    *c: count 总的运动值
    *d: duration 持续时间
*/

//时间版运动
// let timer = null;
// let duration = 10000;
// let d = 500;

// document.onclick = function () {
//     let old = new Date;
//     let begin = parseFloat(getComputedStyle(box).left);
//     d = d - begin;
//     timer = setInterval(() => {
//         let t = new Date - old;
//         if (t > duration) {
//             t = duration;
//         }
//         box.style.left = t / duration * d + begin + 'px';
//         if (t == duration) {
//             clearInterval(timer);
//         }
//     }, 16.7)
// }

//套tween
/*
    d: 总的时间
    c: 总的距离
    t: 当前使用的时间
    b: 起始的位置

    t/d*c+b

*/

// let d = 10000;
// let c = 500;
// let b = parseFloat(getComputedStyle(box).left);

// c = c - b;
// let timer = null;
// document.onclick = function () {
//     let old = new Date;
//     timer = setInterval(() => {
//         let t = new Date - old;
//         if (t > d) t = d;
//         let v = Tween.elasticOut(t, b, c, d);
//         box.style.left = v + 'px';
//         if (t == d) {
//             clearInterval(timer);
//         }
//     }, 16.7);
// }

/*requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，
不会因为间隔时间过短，造成过度绘制，增加开销，也不会因为间隔时间过长
而导致动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，
从而节省系统资源，提高系统性能，改善视觉效果

requestAnimationFrame(运动函数)
返回值为number(编号)

cancelAnimationFrame(编号)关闭动画帧
*/

// box.onclick = function () {
//     move(box, 'left', '10em', 10000,2);
//     // move(box,'opacity',0,1000);
// }


// function move(ele, attr, count, duration, begin) {
//     let timer = null;
//     let time = 0;
//     let v = null;
//     let unit = 'px';
//     if (begin) {
//         begin = begin;
//     } else {
//         begin = parseFloat(getComputedStyle(ele)[attr]);
//     }
//     let re = /px|em|rem/;
//     if (typeof count === 'string') {
//         if (count.match(re)) {
//             unit = count.match(re)[0];

//         } else {
//             unit = 'px';
//         }

//     }
//     console.log(count);
//     console.log(begin);
//     count = parseFloat(count) - begin;
//     console.log(begin);
//     console.log(count);
//     (function animat() {
//         timer = requestAnimationFrame(animat);
//         time += 16.7;
//         if (time > duration) {
//             time = duration;
//         }
//         v = time / duration * count + begin;
//         if (attr === 'opacity') {
//             ele.style[attr] = v;
//         } else {
//             ele.style[attr] = v + unit;
//         }
//         if (time === duration) {
//             cancelAnimationFrame(timer);
//         }
//     })();
// }


//requestAnimationFrame多方位运动
// box.onclick = function () {
//     move(box, {
//         left: '10em',
//         top: '300px',
//         width: 500,
//         fontSize: {
//             begin: 2,
//             count: '5rem'
//         },
//         opacity: 0.3
//     }, 1000);
// }

// function move(ele, attr, duration) {
//     let timer = null;
//     let time = 0;
//     let unit = 'px';
//     let v = null;
//     let re = /px|em|rem/;


//     let j = {};
//     for (let k in attr) {
//         unit = 'px';
//         if (typeof attr[k] === 'string' || typeof attr[k] === 'number') {
//             let begin = parseFloat(getComputedStyle(ele)[k]);
//             console.log(begin);
//             if (typeof attr[k] === 'string') {
//                 unit = attr[k].match(re) ? attr[k].match(re)[0] : 'px';
//             }
//             j[k] = {
//                 count: parseFloat(attr[k]) - begin,
//                 begin,
//                 unit
//             }

//         } else {
//             if (typeof attr[k].count === 'string') {
//                 unit = attr[k].count.match(re) ? attr[k].count.match(re)[0] : 'px';
//             }
//             j[k] = {
//                 count: parseFloat(attr[k].count) - attr[k].begin,
//                 begin: attr[k].begin,
//                 unit
//             }

//         }
//     }
//     console.log(j);

//     (function animat() {
//         timer = requestAnimationFrame(animat);
//         time += 16.7;
//         if (time >= duration) {
//             time = duration;
//         }
//         for (let k in j) {
//             // v = time / duration * j[k].count + j[k].begin;
//             v = Tween.elasticBoth(time, j[k].begin, j[k].count, duration);
//             if (k === 'opacity') {
//                 ele.style[k] = v;
//             } else {
//                 ele.style[k] = v + j[k].unit;
//             }
//         }

//         if (time === duration) {
//             cancelAnimationFrame(timer);
//         }
//     })();
// }


//requestAnimationFrame多方位运动2
box.onclick = function () {
    move(box,{
        left:'10em',
        top:'300px',
        width:500,
        fontSize:{
            begin:2,
            count:'5rem'
        },
        opacity:0
    },500);
}

function move(ele,attrs,duration){

}






