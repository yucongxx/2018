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

var k=1;
console.log(5+(++k)+(k++)+4+(k--)+(++k)+3+(--k)+(k++));