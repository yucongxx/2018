// function Fn() {
//     var n = 10;
//     this.m = n;
//     return;
//     console.log(1);
// }
// let f = new Fn();
// console.dir(f);

// console.log(f instanceof Fn);
// console.log(f instanceof Array);
// console.log(f instanceof Object);

// console.log('m' in f);
// console.log('toString' in f);

// console.log(f.hasOwnProperty('toString'));

// function hasPubProperty(object, attr) {
//     if (object.hasOwnProperty(attr)) {
//         return false;
//     } else if (!(attr in object)) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(hasPubProperty(f, 'toString'));
// console.log(hasPubProperty(f, 'n'));

// Array.prototype.myUnique = function myUnique(ary) {
//     var obj = {};
//     for (var i = 0; i < this.length; i++) {
//         var item = this[i];
//         if (obj.hasOwnProperty(item)) {
//             this[i] = this[this.length - 1];
//             this.pop();
//             i--;
//             continue;
//         }
//         obj[item] = item;
//     }
//     console.log(obj);
//     obj = null;
//     return this;
// };

// var ary = [55, 55, 12, 89, 3, 4, 3, 5, 3];
// console.log(ary.myUnique());


// Array.prototype.mySlice=function (){
//     //把操作的数组克隆一份
//     let newAry=[];
//     for(let i=0;i<this.length;i++){
//         let item=this[i];
//         newAry.push(item);
//     }
//     return newAry;
// }
// let ary=[12,23,34,35];
// console.log(ary.mySlice());

let fn = function () {
    let ary = [].slice.call(arguments);
    ary.sort(function (a, b) {
        return a - b;
    }).pop();
    ary.shift();
    return eval(ary.join('+'))/ary.length.toFixed(2);
}
console.log(fn(10,20,30,80,9.5,5));