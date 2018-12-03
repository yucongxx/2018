/*
事件：
    用户在浏览器操作的时候，触发（符合某种条件）的一种交互行为（事件，事务）

     每个元素自身就有事件，只不过默认为null，当某个事件绑定了一个函数之后，
     用户在操作浏览器的时候，触发了这个事件，那么就执行事件的函数。

     用户操作浏览器的时候会触发很多的事件，只有绑定了事件函数的事件才会对用户有响应，但是没有响应的事件并不是没触发，只是没事件函数而已。


     某个元素有这个事件，事件值默认为null，如果没有这个事件，事件值undefined（某个对象访问一个没有设置的属性而已）


*/

/*
事件绑定：
在传统事件中，同一个元素绑定多次同一个事件，那么后面的事件
函数会把前面的事件函数给覆盖

在DOM2事件绑定中，可以让同一个元素，绑定多次同一个事件

// const box = document.getElementById('box');
// const btn=document.getElementById('btn');


// box.addEventListener('click', fn);

// function fn() {
//     alert(1);
// }


// btn.addEventListener('click',function (){
//     box.removeEventListener('click',fn);
// })
// // box.addEventListener('click',function (){
// //     alert(2);
// // })

DOM0级事件
    on开头

    解除事件：
    ele.onxx=null;

DOM1级
DOM级别1标准中并没有定义事件相关的内容，所以没有所谓的1级DOM事件模型。

DOM2级事件
在2级DOM中除了定义了一些DOM相关的操作外
还定义了一个*事件模型*，这个标准下的事件模型就是
我们所说的2级DOM事件模型

addEventListener  事件绑定(监听)
removeEventListener解除事件绑定

ele.addEventListener('不带on的事件名',事件函数,布尔值);
ele.removeEventListener('不带on的事件名',事件名(***和绑定事件的函数为同一个地址),布尔值);

在开发移动端的时候，就要用DOM2，不然有些浏览器不会触发手机端事件


IE低版本用:
绑定：box.attachEvent('带on事件名',function(){})
解除：box.detachEvent('带on事件名,function(){})






*/

/*
冒泡:
    从目标点由下而上知道window的过程叫冒泡

    如果目标元素和祖先元素绑定同一个事件，
    那么在执行完目标元素事件函数之后同样会调用祖先级的
    同一个事件中的函数

捕获：
    DOM0是检测不到捕获的，只能用DOM2来检测捕获的过程
    从window起，自上而下，知道目标点的过程就叫做捕获

    DOM2绑定中最后一个参数，是否捕获（true要捕获，false不捕获（冒泡））
    默认为false，不捕获

目标阶段：
    不管是捕获还是冒泡，在目标阶段执行的顺序**按照绑定的先后顺序**
    来执行的（不是先捕获，后冒泡）


当一个事件触发的时候，一般会经历3个过程，第一个为捕获阶段，
第二个为目标阶段，第三个为冒泡阶段--事件流（事件模型）

div1.addEventListener('click', function () {
    alert('tskyblue');
}, true);
div2.addEventListener('click', function () {
    alert('red');
}, false);
btn.addEventListener('click', function () {
    alert('按钮');
}, false);

function fn() { alert('aaa'); }
btn.addEventListener('click', function () {
    alert('按钮2');
}, false);
div2.addEventListener('click', function () {
    alert('tred');
}, true);
div1.addEventListener('click', fn, true);
div1.addEventListener('click', function () {
    alert('skyblue');
}, false);
btn.addEventListener('click', function () {
    alert('T按钮2');
}, true);
btn.addEventListener('click', function () {
    alert('t按钮');
}, true);
div2.addEventListener('click', function () {
    alert('red');
}, false);
btn.addEventListener('click', function () {
    alert('按钮');
}, false);
*/


//冒泡的优点
/*
事件对象：
    当用户触发了某个事件的时候，那么事件函数的
    第一个参数就为事件对象

    这个对象是记录了用户在操作浏览器或者元素的时候的
    相关细节信息

    低版本IE中的事件对象不在事件函数中，在window上
    有个event属性

    firefox下时间对象只有在时间函数的第一个参数中才有
    window上是没有的，如果在firefox下直接访问event
    会报错（没有这个变量）
    解决：
    window.event
    chrome中window有，事件函数的第一个参数也有

    var ev=ev||event;
    var ev=ev||window.event;
    var ev=window.event||ev;

    事件监听（事件源）
    在事件对象中有个属性叫target，能够捕获到事件触发时
    的源头是哪个元素，可以节省性能
    注意：
    只有嵌套关系才能获得准确的事件源

const lis = Array.from(document.getElementsByTagName('li'));

// lis.forEach((e)=>{
//     e.onclick=function (){
//         ul.style.background='pink';
//     }
// })

// ul.onclick=function (){
//     this.style.background='pink';
// }

// lis.forEach(e => {
//     e.onclick=function (){
//         this.style.background = 'pink';
//     }
// })


ul.onclick = function (ev) {
    console.log(ev);
    if (ev.target.nodeName === 'LI') {
        ev.target.style.background="pink";
    }
}

*/

//冒泡的缺点
/*
    当点击按钮的时候，应该box显示，但是因为有冒泡特性
    当执行完按钮的onclick事件函数后，还会执行document的onclick
    的事件函数，所以看上去是没有发生变化的

    注意
    在开发的过程中，如果两个元素是嵌套关系，就要小心
    事件冒泡，两个事件尽量不要重名

    阻止冒泡：
    在事件源上阻止冒泡，就能解决父级执行的问题

    ev.stopPropagation();   是标准属性，但是低版本浏览器不兼容
    ev.cancelBubble=true   不是标准属性，但是所有浏览器都能兼容
    let onOff = true;
    btn.onclick = function (ev) {
    if (onOff) {
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
    }
    onOff = !onOff;
    console.log(ev);
    // ev.cancelBubble=true;
    ev.stopPropagation();
}


document.onclick = function () {
    box.style.display = 'none';
    onOff = false;
}
*/

//别的事件

/*
onclick
onmouseover
onmouseout
onscroll
oninput
onchange
let arr = ['小笼包', '北京烤鸭', '广式点心', '烤肠'];

sele.onchange = function () {
    console.log(arr[this.value]);
    box.innerHTML=arr[this.value];
}

ondblclick
document.ondblclick=function (){
    alert(1);
}

onload
静态资源加载完成之后执行（window.onload）

onresize

onfocus:焦点事件
onblur():失去焦点事件
一个页面，只有一个焦点元素会被激活，一开始，页面中有一个焦点
当按了tab键或者直接激活之后焦点会从页面（window，document）
中移到焦点
txt.onfocus = function () {
    this.placeholder = '';
}

txt.onblur = function () {
    this.placeholder='默认输入内容';
}

txt.focus();//自动聚焦

onmouseenter   移入
onmouseleave   移出
这两个事件没有冒泡也不会穿透

// div1.onmouseover=function (){
//     alert('移入div1');
// }

// div1.onmouseout=function (){
//     alert('移出div1');
// }

// div2.onmouseover=function (ev){
//     alert('移入div2');
//     ev.cancelBubble=true;
// }
// div2.onmouseout=function (ev){
//     alert('移出div2');
//     ev.cancelBubble=true;
// }

//解决方案：使用onmouseenter和onmouseleave

div1.onmouseenter=function (){
    alert('div1移入');
}

div1.onmouseleave=function (){
    alert('div1移出');
}

div2.onmouseenter=function (){
    alert('div2移入');
}
div2.onmouseleave=function (){
    alert('div2移出');
}

*/


//x轴  y轴

/*
onmousemove:  鼠标移动事件
ev.pageX/ev.pageY是基于页面的x，y轴

ev.clientX/ev.clientY是基于可视区的x，y轴


// document.onclick=function (ev){
//     console.log(ev)
// }




document.onmousemove=function (ev){
    console.log(ev.pageX,ev.pageY);
    console.log(ev.clientX,ev.clientY);
    box.style.left=ev.pageX-box.offsetWidth/2+'px';
    box.style.top=ev.pageY-box.offsetHeight/2+'px';
}

*/

//x y轴小应用

/*wrap.onmousemove = function (ev) {

    let l = ev.clientX - box.clientWidth / 2 - wrap.offsetLeft - wrap.clientLeft;
    let h = ev.clientY - box.clientHeight / 2 - wrap.offsetTop - wrap.clientTop;
    if (l < 0) {
        l = 0;
    } else if (l > wrap.clientWidth - box.clientWidth) {
        l = wrap.clientWidth - box.clientWidth;
    }
    if (h < 0) {
        h = 0;
    } else if (h > wrap.clientHeight - box.clientHeight) {
        h = wrap.clientHeight - box.clientHeight;
    }

    box.style.left = l + 'px';
    box.style.top = h + 'px';
}

wrap.onmouseover = function () {
    box.style.display = 'block';
}
wrap.onmouseout = function () {
    box.style.display = 'none';
}
*/


//事件默认行为：
/*当用户触发某个事件的时候，
某种行为不是我们主动些的而是浏览器默认做的事情就是默认行为

点击事件是有2个事件组合在一起形成新的事件

按下：onmousedown

抬起：onmouseup

DOM0阻止默认行为
return false

DOM2阻止默认行为
ev.preventDefault()
document.addEventListener('mousedown',function (ev){
    ev.preventDefault();
})
*/

//右键菜单

// window.oncontextmenu=function (ev){
//     ul.style.left=ev.pageX+'px';
//     ul.style.top=ev.pageY+'px';
//     ul.style.display='block';
//     return false;
// }

// let arr=['造成1000点魔法伤害','沉默全体敌方','造成1500点魔法伤害'];

// ul.onmousedown=function (ev){
//     if(ev.target.nodeName==='LI'){
//         alert(arr[ev.target.dataset.index])
//     }
//     // ev.cancelBubble=true;
// }

// document.onmousedown=function (){
//     ul.style.display='none';
// }

// window.oncontextmenu = function (ev) {
//     ul.style.left = ev.pageX + 'px';
//     ul.style.top = ev.pageY + 'px';
//     ul.style.display = 'block';
//     return false;
// }

// let arr = ['造成1000点魔法伤害', '沉默全体敌方', '造成1500点魔法伤害'];

// ul.onmousedown = function (ev) {
//     if (ev.target.nodeName === 'LI') {
//         alert(arr[ev.target.dataset.index]);
//     }
//     ev.cancelBubble = true;

// }

// document.onmousedown = function () {
//     ul.style.display = 'none';
// }

wrap.onmousemove = function (ev) {

    let l = ev.clientX - box.clientWidth / 2 - wrap.offsetLeft - wrap.clientLeft;
    let h = ev.clientY - box.clientHeight / 2 - wrap.offsetTop - wrap.clientTop;
    if (l < 0) {
        l = 0;
    } else if (l > wrap.clientWidth - box.clientWidth) {
        l = wrap.clientWidth - box.clientWidth;
    }
    if (h < 0) {
        h = 0;
    } else if (h > wrap.clientHeight - box.clientHeight) {
        h = wrap.clientHeight - box.clientHeight;
    }

    box.style.left = l + 'px';
    box.style.top = h + 'px';
}

wrap.onmouseover = function () {
    box.style.display = 'block';
}
wrap.onmouseout = function () {
    box.style.display = 'none';
}