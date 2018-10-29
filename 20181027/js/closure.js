//闭包
/*
1）函数执行形成一个私有作用域，保护里面的私有变量不受外界的干扰，这种保护机制称为闭包
2）形成以个不被销毁的私有作用域(私有栈内存)，就是闭包

*/

//柯理化函数
// function fn(){
//     return function (){
//         console.log(1);
//     }
// }
// var f=fn();

//惰性函数
// var utils=(function (){
//     return {

//     }
// })();

//闭包项目实践应用
/*
1.闭包具有保护作用，保护私有变量不受外界干扰
在真实的项目中，尤其是团队协作开发的时候，应当尽可能减少全局变量的使用，以防止相互之间的冲突("全局变量污染")
此时可以把自己的这一部分内容封装到一个闭包中，让全局变量转换成私有变量。
2.闭包具有保存作用，形成不销毁的私有作用域，把一些值保存下来，方便以后调取使用
var oBox=document.getElementById('box');
var liBox=oBox.getElementsByTagName('li');
var divBox=oBox.getElementsByTagName('div');
function changeTab(curIn){
    for(var i=0;i<liBox.length;i++){
        liBox[i].className='';
        divBox[i].className='';
    }
    liBox[curIn].className='active';
    divBox[curIn].className='active';
}
1.第一种办法
for(var i=0;i<liBox.length;i++){
    liBox[i].onclick=(function (n){
        var i=n;
        return function (){
            changeTab(i);=>上级作用域：自执行函数形成作用域
        }
    })(i);
    =>让自执行函数执行，把执行的返回值return给on-click(此处on-click绑定的是返回的函数，点击的时候执行的是里面的函数)
      自执行函数在给事件赋值的时候已经执行
}
2.第二种办法
for(var i=0;i<liBox.length;i++){
    (function (n){
        liBox[i].onclick=funciton (){
            changeTab(i);
        }
    })(i);
}





*/


