// function fun(){
//         this.a=0;
//         this.b=function(){
//             alert(this.a);
//         }
//     }
//     fun.prototype={
//         b:function(){
//             this.a=20;
//             alert(this.a);
//         },
//         c:function(){
//             this.a=30;
//             alert(this.a)
//         }
//     }
//     var my_fun=new fun();
//     my_fun.b();
//     my_fun.c();

// let ary=[12,23,34];
// let [...arg]=ary;
// console.log([...arg]);

// function fn(context,...arg){
//     console.log(context,arg);
// }
// let obj={};
// fn(obj,10,20,30,50,40);

//继承

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.say = function () {
//     console.log(this.name);
// }

// function Player(name, age, job) {
//     Person.call(this, name, age);
//     this.job = job;

// }

// // function ph() { };
// // ph.prototype = Person.prototype;
// // Player.prototype = new ph;
// // Player.prototype.constructor = Player;
// // for (let attr in Person.prototype) {
// //     if(Person.prototype.hasOwnProperty(attr)){
// //         Player.prototype[attr]=Person.prototype[attr];
// //     }
// // }
// Player.prototype=Object.create(Person.prototype);

// Player.prototype.skill = function () {
//     console.log('后仰跳投');
// }


// let p = new Player('麦迪', 20, '得分后卫');
// let h = new Person('小明', 20);
// console.log(h);
// console.dir(p);
// p.say();
// h.say();
// console.log(Player.prototype.constructor);

// let Player = function (name, position) {
//     this.name = name;
//     this.position = position;
// }
// Player.prototype.shoot = function fn() {
//     console.log('投篮准');
// }


// let Player1 = function (name, position, height) {
//     Player.call(this, name, position);
//     this.height = height;
// }

// function fn() {};
// fn.prototype = Player.prototype;
// Player1.prototype = new fn();
// Player1.prototype.constructor = Player1;

// // for(let attr in Player.prototype){
// //     if(Player.prototype.hasOwnProperty(attr)){
// //         Player1.prototype[attr]=Player.prototype[attr];
// //     }
// // }

// // Player1.prototype=Object.create(Player.prototype);
// Player1.prototype.skill=function (){
//     console.log('干拔跳投');
// }

// let m = new Player1('麦迪', '得分后卫', 2.03);
// console.log(m);
// m.shoot();
// m.skill();

// let k = new Player('科比', '得分后卫');
// console.log(k);
// k.shoot();

// let obj = { name: '很好', age: 20 };
// let newObj = {...obj,height:20};


let ary = [12, 13, 14];
let newAry = [...ary, 15];