// console.log(name);
// console.log(window.name);
// console.log('name' in window);

// var name = 10;
// console.log(name);


// console.log(aa);
// console.log(window.aa);
// var aa=12;
// console.log(aa);



// console.log(a); 
// var a=12; 
// function fn(){
//     console.log(a); 
//    var a=13;   
// }
// fn();   
// console.log(a);

// console.log(a); 
// var a=12;
// function fn(){
//     console.log(a);
//     a=13;
// }
// fn();
// console.log(a);

// var foo=1; 
// function bar(){
//     if(!foo){
//         var foo=10; 
//     }
//     console.log(foo); 
// }
// bar();

// let a=10;
// a=20;

// console.log(a);

// if(!("a" in window)){
//    var a=1;
// }
// console.log(a);
// var a=4;
// function b(x,y,a) {    
//      console.log(a); 
//      arguments[2]=10;        
//      console.log(a); 
// }
// a=b(1,2,3);   
// console.log(a); 
// var foo='hello'; 
// (function(foo){
//    console.log(foo);
//    var foo=foo||'world';
//    console.log(foo);
// })(foo);
// console.log(foo);

// var ary=[1,2,3,4];
// function fn(ary){
//     ary[0]=0;    
//     ary=[0];    
//     ary[0]=100;    
//     return ary; 
// }
// var res=fn(ary);    
// console.log(ary);    
// console.log(res);

// var n=0; 
// function a(){
//    var n=10; 
//    function b(){
//        n++; 
//        console.log(n); 
//    }
//    b();
//    return b; 
// }
// var c=a();
// c(); 
// console.log(n);

// var k=1;
// console.log(5+(++k)+(k++)+4+(k--)+(++k)+3+(--k)+(k++));


/*
    作用域：
    域：范围，空间
    变量，函数，对象名称的可用性，去探究某段代码它的值（结果）是什么。
    全局作用域：当打开浏览器的时候执行js代码，此时的域就是全局作用域

    在浏览器中全局指向window
    单纯被script标签包着的范围就是全局范围
    最大的栈内存，存着简单数据

    当你打开浏览器的时候js执行分为2步
    1.变量提升（预解析，预处理）
    在全局只看2个东西(var和function)

        1.var a=undefined
        遇见var不但会找变量，并且给变量赋值undefined
        如果2个变量名是一样的，下面把上面的覆盖即可

        2.function a(){}
        遇见函数直接把函数名提升并且赋值为整个代码块字符串
        2个函数名字一样的情况下，下面把上面的覆盖（主需要看最后一个函数就可以了）

        3.变量名和函数名一样的情况下
        最终留下的是代码块（函数）
        如果是函数声明那么就不会再读取了（只是预解析的那一次）
        函数表达式是带等号的，所以会读

    2.逐行解读代码
    只看等号

    局部作用域
        在函数或者块({})里的js的作用范围

*/

//函数声明
/*
function fn(){}

函数声明  在函数声明的上和下都能执行
var fn=function (){}  函数表达式

let fn=()=>{}   es6

fn();


function fn(){
    alert(1);
}

fn()//>不能执行，因为fn变量提升是undefined
var fn=function (){
    alert(2);
}

*/

//全局作用域的小题
/*
console.log(fn);//字符串alert(2)
var fn = 20;
function fn() {
    alert(1);
}
console.log(fn)//20
var fn = function () { alert(3); }
console.log(fn);//function () { alert(3); }字符串
var fn = 10;
console.log(fn);//10
function fn() {
    alert(2);
}
console.log(fn);//10



console.log(fn); //fn(){alert(1);}字符串
fn();   //alert 1 
var fn = 20; 
console.log(fn);//20
var fn = function(){alert(3);}
fn();//alert 3 
function fn(){alert(2);}
console.log(fn);    //function(){alert(3);}字符串
function fn(){alert(1);}
console.log(fn);    //function(){alert(3);}字符串
fn();       //alert 3
var fn = 10;    
console.log(fn); //10
fn();   //报错

*/

/*
in 是运算符，它能够运算某个属性是不是这个对象的
        '属性名' in 对象
        有：true
        没有：false

对象身上没有这个属性是undefined
window.aa undefined
var a  undefined
window.alert();

ie浏览器windwo下是没有name的，window.name是undefined
chrome||ff 有name，并且name赋值为''

var obj = {
    name: "海龙",
    obj1: {
        name: '小鱼儿',
        fn: function () {
            console.log(this);
        }
    }
}

console.log(typeof window);
console.log(window.cc);

console.log(obj.obj1.name);
obj.obj1.fn();
console.log(a);
console.log(obj.xxx);


var a = 12;
function fn() {
    var a = 11;
    function nf() {
        var a = 10;
        var b = 20;
        console.log(a);
    }
    nf();
    console.log(b);
}
fn();
*/
















