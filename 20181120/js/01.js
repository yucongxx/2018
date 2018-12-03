// class Drag {
//     constructor(id) {
//         this.disX = 0;
//         this.disY = 0;
//         this.box = document.getElementById(id);
//     }
//     init() {

//         this.box.addEventListener('mousedown', this.down.bind(this));
//     }
//     down(ev) {
//         console.log(this, this.box);
//         this.disX = ev.pageX - this.box.offsetLeft;
//         this.disY = ev.pageY - this.box.offsetTop;
//         document.addEventListener('mousemove', this.m = this.move.bind(this));
//         document.addEventListener('mouseup', this.u = this.up.bind(this));
//     }
//     move(ev) {
//         this.box.style.left = ev.pageX - this.disX + 'px';
//         this.box.style.top = ev.pageY - this.disY + 'px';
//     }
//     up() {
//         document.removeEventListener('mousemove', this.m);
//         document.removeEventListener('mouseup', this.u);
//     }
// }


// let d = new Drag('box');
// d.init();



/*
拖拽的三大事件
    onmousedown
    onmousemove
    onmouseup

const box = document.getElementById('box');
let disX = 0;
let disY = 0;
let num = 0;
let onOff=true;
box.onmousedown = function (ev) {
    disX = ev.pageX - box.offsetLeft;
    disY = ev.pageY - box.offsetTop;
    document.onmousemove = function (ev) {
        if(onOff){
            num++;
            onOff=false;
        }
        let dL = ev.pageX - disX;
        let dT = ev.pageY - disY;
        box.style.left = dL + 'px';
        box.style.top = dT + 'px';
    };
    document.onmouseup = function () {
        console.log(num);
        onOff=true;
        document.onmousemove=null;
        document.onmouseup=null;
    }
    return false;
}
*/


/*
面向对象拖拽

class Drag{
    constructor(id){
        this.disX=0;
        this.disY=0;
        this.box=document.getElementById(id);
    }
    init(){
        this.box.addEventListener('mousedown',this.down.bind(this));
    }
    down(ev){
        this.disX=ev.pageX-this.box.offsetLeft;
        this.disY=ev.pageY-this.box.offsetTop;
        this.a=this.move.bind(this);
        this.b=this.up.bind(this);
        document.addEventListener('mousemove',this.a);
        document.addEventListener('mouseup',this.b);
    }
    move(ev){
        this.box.style.left=ev.pageX-this.disX+'px';
        this.box.style.top=ev.pageY-this.disY+'px';
    }
    up(){
        document.removeEventListener('mousemove',this.a);
        document.removeEventListener('mouseup',this.b);
    }
}

let d=new Drag('box');

d.init();

*/
//事件绑定的this
/*
let a=fn.bind(this);
btn1.addEventListener('click',a);
function fn(){
    console.log(1);
}
btn2.addEventListener('click',function (){
    btn1.removeEventListener('click',a);
})


console.log(fn.bind(this)==fn.bind(this));

*/

//拖拽验证
/*
let box2L = box2.offsetLeft + box2.clientLeft;
let box2T = box2.offsetTop + box2.clientTop;

class Drag {
    constructor(id) {
        this.disX = 0;
        this.disY = 0;
        this.box = document.getElementById(id);
        this.onOff = false;
    }
    init() {
        this.box.addEventListener('mousedown', this.down.bind(this));
       
    }
    down(ev) {
        this.disX = ev.pageX - this.box.offsetLeft;
        this.disY = ev.pageY - this.box.offsetTop;
        this.a= this.move.bind(this);
        this.b= this.up.bind(this);
        document.addEventListener('mousemove',this.a);
        document.addEventListener('mouseup', this.b);
    }
    move(ev) {
        let boxL = ev.pageX - this.disX;
        let boxT = ev.pageY - this.disY;
        if (Math.abs(box2L - boxL) < 5 && Math.abs(box2T - boxT) < 5) {
            this.onOff = true;
            boxL=box2L;
            boxT=box2T;
        } else {
            this.onOff = false;
        }
        this.box.style.left = boxL + 'px';
        this.box.style.top = boxT + 'px';
    }
    up() {
        if(this.onOff){
            console.log('验证成功');
        }else{
            console.log('验证失败');
        }
        document.removeEventListener('mousemove',this.a);
        document.removeEventListener('mouseup',this.b);
    }
}
let d=new Drag('box');
d.init();

*/
//面向对象移形换影
/*
class Drag {
    constructor(id) {
        this.disX = 0;
        this.disY = 0;
        this.box = document.getElementById(id);
    }
    init() {
        this.box.addEventListener('mousedown', this.down.bind(this));
    }
    down(ev) {
        this.disX = ev.pageX - this.box.offsetLeft;
        this.disY = ev.pageY - this.box.offsetTop;
        this.div = document.createElement('div');
        this.div.className = 'y';
        this.div.style.left = this.box.offsetLeft + 'px';
        this.div.style.top = this.box.offsetTop + 'px';
        this.body = document.getElementById('body');
        this.body.appendChild(this.div);
        // console.log(this.div);
        this.a = this.move.bind(this);
        this.b = this.up.bind(this);
        document.addEventListener('mousemove', this.a);
        document.addEventListener('mouseup', this.b);
        ev.preventDefault();
    }
    move(ev) {
        let dL = ev.pageX - this.disX;
        let dT = ev.pageY - this.disY;
        this.div.style.left = dL + 'px';
        this.div.style.top = dT + 'px';
    }
    up() {
        this.box.style.left = this.div.style.left;
        this.box.style.top = this.div.style.top;
        this.div.remove();
        document.removeEventListener('mousemove', this.a);
        document.removeEventListener('mouseup', this.b);
    }
}


let d = new Drag('box');

d.init();

*/


//碰撞
/*
class Drag {
    constructor(id,id2) {
        this.disX = 0;
        this.disY = 0;
        this.box = document.getElementById(id);
        this.box2=document.getElementById(id2);
    }
    init() {
        this.box.addEventListener('mousedown', this.down.bind(this));
    }
    down(ev) {
        this.disX = ev.pageX - this.box.offsetLeft;
        this.disY = ev.pageY - this.box.offsetTop;
        document.addEventListener('mousemove', this.a = this.move.bind(this));
        document.addEventListener('mouseup', this.b = this.up.bind(this));
        ev.preventDefault();
    }
    move(ev) {
        this.box.style.left = ev.pageX - this.disX + 'px';
        this.box.style.top = ev.pageY - this.disY + 'px';
        if (crash(this.box, this.box2)) {
            this.box2.style.background = "yellow";
        } else {
            this.box2.style.background = 'green';
        }
    }
    up() {
        document.removeEventListener('mousemove', this.a);
        document.removeEventListener('mouseup', this.b);
    }
}


let d = new Drag('box','box2');

d.init();

function crash(obj1, obj2) {
    let l1 = obj1.offsetLeft;
    let t1 = obj1.offsetTop;
    let r1 = obj1.offsetWidth + l1;
    let b1 = obj1.offsetHeight + t1;

    let l2 = obj2.offsetLeft;
    let t2 = obj2.offsetTop;
    let r2 = obj2.offsetWidth + l2;
    let b2 = obj2.offsetHeight + t2;

    if (r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2) {
        return false;
    } else {
        return true;
    }
}
*/

//自定义滚动条

// class Drag {
//     constructor(id,id1,id2) {
//         this.disY = 0;
//         this.box = document.getElementById(id);
//         this.box2 = document.getElementById(id1);
//         this.box3 = document.getElementById(id2);
//     }
//     init() {
//         this.box2.addEventListener('mousedown', this.down.bind(this));
//     }
//     down(ev) {
//         this.disY = ev.pageY - this.box2.offsetTop;
//         document.addEventListener('mousemove', this.a = this.move.bind(this));
//         document.addEventListener('mouseup', this.b = this.up.bind(this));
//     }
//     move(ev) {
//         let dT = ev.pageY - this.disY;

//         if (dT < 0) {
//             dT = 0;
//         } else if (dT > this.box.offsetHeight - this.box2.offsetHeight) {
//             dT = this.box.offsetHeight - this.box2.offsetHeight
//         }
//         let t = dT / (this.box.offsetHeight - this.box2.offsetHeight);
//         this.box3.style.width = (1 - t) * 200 + 'px';
//         this.box3.style.height = (1 - t) * 200 + 'px';
//         this.box2.style.top=dT+'px';
//     }
//     up() {
//         document.removeEventListener('mousemove',this.a);
//         document.removeEventListener('mouseup',this.b);
//     }
// }

// let d = new Drag('box','box2','box3');

// d.init();


//自定义滚动条+滚轮
/*
class Drag {
    constructor(id, id1, id2) {
        this.disY = 0;
        this.box = document.getElementById(id);
        this.box2 = document.getElementById(id1);
        this.box3 = document.getElementById(id2);
    }
    init() {
        this.box2.addEventListener('mousedown', this.down.bind(this));
        document.addEventListener('mousewheel', this.wheel.bind(this));
    }
    down(ev) {
        this.disY = ev.pageY - this.box2.offsetTop;
        document.addEventListener('mousemove', this.a = this.move.bind(this));
        document.addEventListener('mouseup', this.b = this.up.bind(this));
    }
    move(ev) {
        this.dT = ev.pageY - this.disY;
        if (this.dT < 0) {
            this.dT = 0;
        } else if (this.dT > this.box.offsetHeight - this.box2.offsetHeight) {
            this.dT = this.box.offsetHeight - this.box2.offsetHeight;
        }
        let scale = this.dT / (this.box.offsetHeight - this.box2.offsetHeight);
        this.box3.style.width = (1 - scale) * 200 + 'px';
        this.box3.style.height = (1 - scale) * 200 + 'px';
        this.box2.style.top = this.dT + 'px';
    }
    up() {
        document.removeEventListener('mousemove', this.a);
        document.removeEventListener('mouseup', this.b);

    }
    wheel(ev) {
        console.log(ev.wheelDelta);
        this.d = this.box2.offsetTop;
        if (ev.wheelDelta < 0) {
            this.d += 5;
            if (this.d > this.box.offsetHeight - this.box2.offsetHeight) {
                this.d = this.box.offsetHeight - this.box2.offsetHeight
            }
            this.box2.style.top = this.d + 'px';
        } else {
            this.d -= 5;
            if (this.d < 0) {
                this.d = 0;
            }
            this.box2.style.top = this.d + 'px';
        }
        this.scale = this.d / (this.box.offsetHeight - this.box2.offsetHeight);
        this.box3.style.width = (1 - this.scale) * 200 + 'px';
        this.box3.style.height = (1 - this.scale) * 200 + 'px';

    }

}


let d = new Drag('box', 'box2', 'box3');

d.init();
*/

//复习this
/*
this:
window:
函数名+括号（箭头函数暴露在全局）
定时器直接调用这个函数
匿名函数自执行

方法：
方法名.前面的对象，前提条件是不被定时器直接调用

new:
实例化对象

严格模式下：
undefined

事件：
事件函数绑定谁，触发时this就是这个元素

箭头函数，只看定义时的父级的域
*/

// function fn() {
//     console.log(this);
// }
// fn();

// document.onclick = function () {
//     let fn = (that) => {
//         console.log(this, that);
//     }
//     fnn(fn);
//     (() => {
//         console.log(this);
//     })();
// }




// function fnn(fn) {
//     console.log(this);//window
//     fn(this);
// }


// let obj = {
//     fn: function () {
//         console.log(this);//=>obj
//     }
// }
// setTimeout(function () {
//     console.log(this);//=>window
//     obj.fn();
// }, 1000)

// setTimeout(obj.fn, 1000);

// let fn = () => {
//     // console.log(arguments);
// }
// fn(1, 2);

// new fn; //不能new箭头函数,也没有arguments



/*
解构的值。必须要为对象的key值，不然会为undefined



*/

// let obj = {
//     name: '张强',
//     age: 14,
//     sex: '男'
// }

// let {name,age,sex:s}=obj;
// console.log(name,age,s);

// let { width: w, height: h } = getComputedStyle(box);


// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };

// let {p:[a,{y:b}]}=obj;

// console.log(a+b);


// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };
// let { loc: { start: { line, column } } } = node;
// console.log(line, column)


// let obj = {};
// let arr = [];
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
// console.log(obj.prop, arr[0]);

// var { x, y = 5 } = { x: 1 };
// var { x: y = 5 } = {};
// var { x: y = 3 } = { x: 5 };  //y=5

// console.log(y);

//  let {foo: {bar}} = {baz: 'baz'};//报错

// let x;
// ({ x } = { x: 1 });
// console.log(x);

// let { log: l, dir: d } = console;
// l('231');
// d(document);

// let arr = [1, 2, 3];
// let { 0: first, [arr.length - 1]: last } = arr;
// l(first, last)


// function add([x, y]) {
//     return x + y;
// }

// add([1, 2]);


// class Drag {
//     constructor(id) {
//         this.disX = 0;
//         this.disY = 0;
//         this.box = document.getElementById(id);
//     }
//     init() {
//         this.box.addEventListener('mousedown', this.down.bind(this));
//     }
//     down(ev) {
//         this.disX = ev.pageX - this.box.offsetLeft;
//         this.disY = ev.pageY - this.box.offsetTop;
//         this.a = this.move.bind(this);
//         this.b = this.up.bind(this);
//         document.addEventListener('mousemove', this.a);
//         document.addEventListener('mouseup', this.b);
//     }
//     move(ev) {
//         this.box.style.left = ev.pageX - this.disX + 'px';
//         this.box.style.top = ev.pageY - this.disY + 'px';
//     }
//     up() {
//         document.removeEventListener('mousemove', this.a);
//         document.removeEventListener('mouseup', this.b);
//     }
// }

// let d = new Drag('box');

// d.init();


