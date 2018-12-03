/*
键盘事件：
当按键的时候触发的事件，所有的按键只认一次，如果有2次
那么第二次会把第一次给覆盖。所以说如果一般要使用组合键，
那么得使用特殊按键符。

特殊按键：（值为布尔，按着就为true，没按着就是false，默认false）
    ctrlKey
    shiftKey
    altKey

onkeydown
键盘按下，只要按着不抬起就会一直触发

注意：
通过onkeydown获取驶入的内容时会比当前按键少一次，所以一般
都用onkeyup

onkeyup
键盘抬起

每个按键中都有对应的键值，这个键值非常有规律的，这些键值
通过事件对象中的keyCode来获取

常用的按下：
    左上右下的键值（数字类型）：
    37,38,39,40

    数字0-9：
    48-57

    英文a-z：
    65-90

    回车：
    13

    
    // document.onkeydown = function () {
//     console.log('按下');
// }


// document.onkeyup=function (){
//     console.log('抬起');
// }


// txt.onkeydown=function (){
//     alert(this.value);
// }



txt.onkeyup = function (ev) {
    // alert(this.value);
    // console.dir(ev);
    switch (ev.keyCode){
        case 37:
            console.log('左键');
            break;
        case 38:
            console.log('上键');
            break;
        case  39:
            console.log('右键');
            break;
        case 40:
            console.log('下键');
    }
}
*/


//小例子

/*
let temp = '';

btn.onclick = function () {
    let val = txt.value;
    temp += `<li>${val}</li>`;
    ul.innerHTML = temp;
    txt.value = '';
}


// document.onkeyup = function (ev) {
//     if (ev.keyCode === 13) {
//         btn.onclick();
//     }
// }


document.onkeyup = function (ev) {
    console.log(ev.ctrlKey);
    if (ev.ctrlKey && ev.keyCode === 13) {
        btn.onclick();
    }
}

*/


//模拟下拉框
/*
let arr = ['女游客逛西湖嫌行李重', '周一围与女助理亲密同喝奶茶遭偷拍', '王霜入亚足联年度最佳提名', '小德爆冷完败丢冠', '《英雄联盟》新英雄概念预告公布'];
let temp = '';
arr.forEach((e, i) => {
    temp += `<li class=${i === 0 ? 'active' : ''}>${e}</li>`;
    ul.innerHTML = temp;
})

let liBox = Array.from(document.getElementsByTagName('li'));
let li = liBox[0];

console.log(li);
txt.onfocus = function () {
    ul.style.display = 'block';
}


liBox.forEach((e, i) => {
    e.onclick = function () {
        li.className = '';
        this.className = 'active';
        li = liBox[i];
        num = i;
        txt.value = li.innerHTML;
        ul.style.display = 'none';
    }
})

let num = 0;
txt.onkeyup = function (ev) {
    switch (ev.keyCode) {
        case 38:
            num--;
            if (num < 0) {
                num = arr.length - 1;
            }
            li.className = '';
            liBox[num].className = 'active';
            li = liBox[num];
            break;
        case 40:
            num++;
            num %= arr.length;
            li.className = '';
            liBox[num].className = 'active';
            li = liBox[num];
            break;
        case 13:
            this.value = li.innerHTML;
            ul.style.display = 'none';
            this.blur();
    }
}

*/

//推箱子
// let num = 0;
// let timer = null;

// window.onkeydown = function (ev) {
//     clearInterval(timer);
//     timer = setInterval(() => {

//         switch (ev.keyCode) {
//             case 37:
//                 num -= 2;
//                 box.style.left = box.offsetLeft - 5 + 'px';
//                 break;
//             case 38:
//                 num -= 2;
//                 box.style.top = box.offsetTop - 5 + 'px';
//                 break;
//             case 39:
//                 num += 2;
//                 box.style.left = box.offsetLeft + 5 + 'px';
//                 break;
//             case 40:
//                 num += 2;
//                 box.style.top = box.offsetTop + 5 + 'px';
//                 break;
//         }


//         box.style.transform = 'rotate(' + num + 'deg)';
//     }, 10);
// }

// window.onkeyup = function () {
//     clearInterval(timer);
// }


/*
    系统为了优化用户体验，在按下时会停顿一小段事件（实测440ms左右）

*/


//滚轮事件
/*

*/

// window.onscroll=function (){
//     console.log(1);
// }

// window.onmousewheel = function (ev) {
//     if (ev.wheelDelta > 0) {
//         alert('上');
//     } else {
//         alert('下');
//     }
//     console.log(ev.wheelDelta);
// }

// window.addEventListener('DOMMouseScroll',function (ev){
//     if(ev.detail>0){
//         alert('下');
//     }else{
//         alert('上');
//     }
// })

/*
function myWheel(obj, fn) {
    if (window.onmousewheel === undefined) {
        obj.addEventListener('DOMMouseScroll', move);
    } else {
        obj.addEventListener('mousewheel', move);
    }
    function move(ev) {
        let o = false;
        if (ev.wheelDelta) {
            o = ev.wheelDelta > 0 ? true : false;
        } else {
            o = ev.detail > 0 ? false : true;
        }
        fn(o);
    }
}



myWheel(window, function (o) {
    if (o) {
        alert('shang');
    } else {
        alert('xia');
    }
});
*/


//单页切换应用

/*
function myWheel(obj, fn) {
    if (window.onmousewheel === undefined) {
        obj.addEventListener('DOMMouseScroll', move);
    } else {
        obj.addEventListener('mousewheel', move);
    }
    function move(ev) {
        let o = false;
        if (ev.wheelDelta) {
            o = ev.wheelDelta > 0 ? true : false;
        } else {
            o = ev.detail > 0 ? false : true;
        }
        fn(o);
    }
}

let color = ['pink', 'orange', 'indianred', 'silver', 'gold', 'skyblue'];
let temp = '';
color.forEach((e) => {
    temp += `<div style=background:${e}></div>`;
    body.innerHTML = temp;
});

let iH = window.innerHeight;
console.log(iH);

let num = 0;
let onOff = false;
myWheel(window, function fn(oo) {
    if (onOff) {
        return;
    }
    onOff = true;
    if (oo) {
        num--;
        if (num < 0) {
            num = 0;
        }
    } else {
        num++;
        if (num > color.length - 1) {
            num = color.length - 1;
        }
    }
    body.style.transition = '1s';
    body.style.top = -iH * num + 'px';
    setTimeout(() => {
        onOff=false;
    },1000)
})
*/


//数组的结构赋值

/*
如果要结构数组，那么声明变量的时候就要是个数组（左右两边都要是数组）

let [foo]=1;
let [foo]=false;
let [foo]=NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};

数组中变量可以默认赋值，当等号右边没有值的情况下，会走默认否则走右边的值

*/

// function f() {
//     console.log('aaa');
// }
// let [x = f()] = [];
// console.log(x);


// let x;
// if ([1][0] === undefined) {
//     x = f();
// } else {
//     x = [1][0];
// }
// console.log(x);
