/*
    字符串遇到\+字母，需注意是否为元字符，如果是元字符，要转义

    match ->[] null
    test ->布尔值 判断
    
    replace 替换
        callback->每匹配一次正则就调用一次函数
        子项
    
    只要函数调用
    运行代码
    返回值（）
    只要是函数，方法都有返回值


    function fn(){
        lat a=10;
        return a;
    }
    alert(fn());
*/

// let obj = {
//     name: '刘晓婷',
//     age1: 18,
//     mm: '杨雅婷',
//     age2: 16,
//     12: 12
// };

// //   /{\w+}/
// let str = '我的名字叫{name}，{12}今年{age1}岁,我还有个妹妹叫{mm}，今年{age2}岁.';


// let s=str.replace(/\{(\w+)\}/g,($0,$1)=>{
//     return obj[$1];

// })
// console.log(s);

// let arr = [1, 1, 22, 5];

// arr.push(5, arr.push(6));//[1,1,22,5,6,5,5]

// arr.unshift(arr.push(arr.pop(20)));//[7,1,1,22,5,6,5,5]



//盒子模型

// const box = document.getElementById('box');

/* console.log(box.style.width);





*/

// console.dir(box);

// console.log(getComputedStyle(box).width);

// let arr=getComputedStyle(box).transform.match(/-?\d+/g);
// console.log(arr);


// let y=arr[arr.length-1];
// let x=arr[arr.length-2];



//抖函数

// const box = document.getElementById('box');

// let arr = [10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0];
// let timer = null;
// let num = 0;

// box.onclick = function () {
//     timer = setInterval(() => {
//         this.style.left = arr[num] + 'px';
//         num++;
//         if (num > arr.length) {
//             clearInterval(timer);
//             num=0;
//         }
//     }, 16.7);
// }

//抖函数2
// box.onclick=function (){
//     dou(box,'left',15,function(){
//         box.style.background='skyblue';
//         setTimeout(function (){
//             box.style.top='500px';
//             box.style.transition='1s';
//         })
//     });
// }


// function dou(ele, attr, n, callback) {
//     let arr = [];
//     let timer = null;
//     let num = 0;
//     for (let i = n; n > 0; n -= 2) {
//         arr.push(i, -i);
//     }
//     arr.push(0);
//     let begin = parseFloat(getComputedStyle(ele)[attr]);
//     timer = setInterval(() => {
//         ele.style[attr] = arr[num] + begin + 'px';
//         num++
//         if (num > arr.length) {
//             clearInterval(timer);
//             callback && callback();
//         }
//     }, 16.7)
// }



//可视区尺寸

/*
    当看得见的尺寸：
    ele.clientWidth/ele.clientHeight 输出是number类型
    支持padding，不支持border

    即支持border也支持padding的
    offsetWidth/offsetHeight;
    如果没有固定的宽高且被内容撑开，那么会计算被内容撑开的高度

    就算有固定宽高，也能获取被内容撑开的高度（实测不包含边框）
        scrollWidth/scrollHeight
*/

// console.log(box.clientHeight);
// console.log(box.offsetHeight);
// console.log(box.scrollHeight);


//元素的距离
/*
    offsetLeft:
    子元素的左外边框到定位父级的左内边框的距离

    offsetTop
    子元素的上外边框到定位父级的上内边框的距离

    offsetParent  定位父级

    如果子级没有定位，默认走body
*/

// console.log(box3.offsetLeft);
// console.log(box3.offsetParent);


//元素绝对位置的计算

/*
    offsetLeft:
    子元素的左外边框到定位父级的左内边框的距离

    offsetTop
    子元素的上外边框到定位父级的上内边框的距离

    offsetParent   定位父级

    clientLeft/clientTop
    元素的左边框/元素的上边框

    如果子级没有定位，默认走body


    思路：
    先计算当前元素的定位距离和边框，当前元素有定位父级，再计算（包括边框），
    定位父级的定位距离，一直到没有定位父级，就不计算了，最后减去目标元素的左边框。

    ele.getBoundingClientRect()->返回值为对象
    

*/

// console.log(box3.clientLeft);

// let ele = box3;
// let l = 0;
// let box3L = box3.clientLeft;
// while (ele) {
//     l += (ele.offsetLeft + ele.clientLeft);
//     ele = ele.offsetParent;
// }
// l -= box3L;
// console.log(l);
// console.log(box3.clientLeft);
// console.log(getComputedStyle(box3).borderLeftWidth);

// console.log(box3.getBoundingClientRect());
// console.log(obj.offset('#box3').left);
// console.log(box3.clientLeft);



//总结：
/*
    1. ele.clientWidth/ele.clientHeight
    元素的宽高，包括padding，不包括border
    box3.clientWidth=>200

    2.ele.clientLeft/ele.clientTop
    元素的左边框宽/元素的上边框高
    box3.clientLeft=>10

    3.ele.offsetWidth/ele.offsetHeight
    元素的宽高，包括padding，也包括border
    如果没有设置固定的高度，会计算被内容撑开的高度
    box3.offsetWidth=>220

    4.ele.offsetLeft/ele.offsetTop
    元素左边外边框（不包含box3的左外边框）到父级元素左内边框
    （不包含父级box1左外边框）的距离，但是包括当中box2的边框距离
    box3.offsetLeft=>210

    5.ele.scrollWidth/ele.scrollHeight
    元素的宽高，如果设置了固定宽度高度，也会计算被内容撑开的宽高
    （不包含边框）

    6.offsetParent
    定位父级

*/

// console.log(box3.clientWidth);
// console.log(box3.clientLeft);
// console.log(box3.offsetWidth);
// console.log(box3.offsetLeft);
// console.log(box3.offsetParent);



//复习

/*
1.什么是闭包，举例说明闭包的应用场景

closure
函数套函数，子函数引用父函数的参数或者变量并且子函数被外界引用
（没被释放）此时父函数形成闭包环境，这个时候父级的参数或者变量
不会被浏览器垃圾回收机制回收。

闭包多了一定是不好的，如果在开发的时候遇到了，闭包环境又不想让
变量或者参数不回收，在使用完后赋值null

应用场景：
减少全局污染
存储父函数的参数或者变量，为了累计运算

选项卡，不使用自定义属性，使用闭包

(function (a){
    lis[a].onclick=function (){
        alert(a);
    }
})(i);

    lis[a].onclick=(function (a){
        return function (){
            alert(a);
        }
    })(i);

function fn(){
    let a=0;
    return function fn2(){
        a++;
    }
}
let f=fn();
console.dir(f);

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 50);
}


for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 50);
    })(i);
}

2.let 和var的区别

let 没有变量提升   var有

let 不会映射window  var会

let 不能声明相同名字的变量  var 可以

let会形成块作用域，var不会

3.什么是高级单例模式，工厂模式
功能强大的单独实例模式，用一个匿名函数自执行返回一个对象，
对象中可以选择暴露对外接口，从而达到高内聚低耦合的开发效果
let nameSpace=(function (){
    function fn(){

    };
    function fn1(){

    };
    return {
        fn,
        fn1
    }
})();

工厂模式：
归类，封装达到批量生产的目的（原料->加工->出厂
，3个阶段，返回对象）

function createPerson(name,age){
        let obj={};
        obj.name=name;
        obj.age=age;
        return obj;
}

let f1=createPerson('',20);


4.什么是面向对象

把具有相同特征的代码抽象出来归为一类，把描述这个类的细节特征或功能
挂在这个类的原型上的编程设计思想叫面向对象

5.函数有哪几种角色

普通函数
类（构造函数）
对象
function fn(){}

     Function.prototype.say = 30;
     fn.prototype.say = 20
     console.dir(fn);

6.new和不new的区别

new 不加括号也能运行        不new必须加括号

this 默认指向实例           window

return 引用类型=引用类型    return写啥是啥
        基本类型=对象实例       
        默认return实例      默认return undefined

7.原型和原型链的关系
实例__proto__ ===构造函数原型

实例中没有->类中查看->实例proto->构造函数原型->
构造函数原型proto->object.prototype

8.this会出现哪些地方，改变this的方法有哪些
window
fn()
定时器
箭头函数暴露在全局
自执行函数

对象
.前面的

实例化对象
构造函数执行

undefined
严格模式下'use strict'

绑定事件
this是当前操作的元素

父级域的this
箭头函数

call
第一个参数是改变this指向，后面的参数无数个，实参

apply
第一个参数是改变this指向，后面是一个数组，数组里面是实参

bind
第一个参数改变this指向，后面可以有无数个实参，但是不会执行



9.继承的方式

   call（类式继承）
   parent.call(this,name,age)

   拷贝继承
   for(let attr in obj){
    if(parent.prototype.hasOwnProperty(attr)){
        children.prototype[attr]=parent.prototype[attr];
    }
   }

   原型继承
   function ph(){}
   ph.prototype=parent.prototype;
   children.prototype=new ph();
   children.prototype.constructor=children

   寄生式继承
   children.prototype=Object.create(parent.prototype)

   es6继承
   class Children extends Parent{
       construstor(,...arg){
           super(...arg);
       }
   }


10.如何进行数据劫持


*/

// let obj={
//     num:2
// }
// let n=2;
// Object.defineProperty(obj,'num',{
//     get(){
//         n+=2;
//         return n;
//     },
//     set(){

//     }
// });


// console.log(obj.num<5&&obj.num>5);

