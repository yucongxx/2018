//模拟下拉框
/*
let arr = ['China, Good!', '中国引领', '中国声音', '被抓', '安倍跪了'];
let temp = '';
arr.forEach((e, i) => {
    temp += `<li class=${i == 0 ? 'active' : ''}>${e}</li>`;
    //    console.log(temp);
})
ul.innerHTML = temp;

txt.onfocus = function () {
    ul.style.display = 'block';
}

let lis = document.getElementsByTagName('li');
console.log(lis);
let num = 0;
let li = lis[0];
let arr2 = [];
txt.onkeyup = function (ev) {
    switch (ev.keyCode) {
        case 40:
            num += 1;
            if (num > lis.length - 1) {
                num %= lis.length;
            }
            li.className = '';
            lis[num].className = 'active';
            li = lis[num];
            break;
        case 38:
            num -= 1;
            if (num < 0) {
                num = lis.length - 1;
            }
            li.className = '';
            lis[num].className = 'active';
            li = lis[num];
            break;
        case 13:
            if (ev.shiftKey) {
                if (!arr2.includes(li.innerHTML)) {
                    arr2.push(li.innerHTML);
                    console.log(arr2);
                } else {
                    arr2 = arr2.filter(e => {
                        return e !== li.innerHTML;
                    });
                    console.log(arr2)
                }
                txt.value = arr2;
            } else {
                if (li.innerHTML !== arr2[arr2.length - 1]) {
                    num = arr.indexOf(arr2[arr2.length - 1]);
                    lis[num].className = 'active';
                    li.className = '';
                    li = lis[num];
                }
                ul.style.display = 'none';
                txt.blur();
            }
    }
}

*/


//滚轮事件

/*
滚轮事件（不管页面有没有滚动条都能触发）
有chrome和ie
    onmousewheel
    ev.wheelDelta   可以反映出滚轮的方向
                    正数就向上滚
                    负数就向下滚

有ff
DOMMouseScroll  必须要要用时间绑定的方式来添加addEventListener

    ev.detail
        正数向下滚
        负数向上滚

*/

/*
function myScroll(obj, fn) {
    if (obj.onmousewheel === undefined) {
        obj.addEventListener('DOMMouseScroll', wheel1);
    } else {
        obj.addEventListener('mousewheel', wheel2);
    }
    function wheel1(ev) {
        let o = true;
        o = ev.detail > 0 ? false : true;
        fn && fn(o);
    }
    function wheel2(ev) {
        let o = true;
        o = ev.wheelDelta > 0 ? true : false;
        fn && fn(o);
    }
}


myScroll(window,function (o){
        console.log(o);
})

*/

//拖拽面向对象
/*
class Drag {
    constructor(id) {
        this.box = document.getElementById(id);
        this.disX = 0;
        this.disY = 0;
        this.u = '';
        this.m = '';
        this.box.addEventListener('mousedown', this.down.bind(this));
    }
    down(ev) {
        this.disX = ev.pageX - this.box.offsetLeft;
        this.disY = ev.pageY - this.box.offsetTop;
        document.addEventListener('mousemove', this.u = this.move.bind(this));
        document.addEventListener('mouseup', this.m = this.up.bind(this));
    }
    move(ev) {
        // this.dL = ev.pageX - this.disX;
        // this.dT = ev.pageY - this.disY;
        this.box.style.left = ev.pageX - this.disX + 'px';
        this.box.style.top = ev.pageY - this.disY + 'px';
    }
    up() {
        document.removeEventListener('mousemove', this.u);
        document.removeEventListener('mouseup', this.m);
    }

}

new Drag('box');

*/

//拖拽碰撞
/*
class Drag {
    constructor(id, id2) {
        this.box = document.getElementById(id);
        this.box2 = document.getElementById(id2);
        this.disX = 0;
        this.disY = 0;
        this.u = '';
        this.m = '';
        this.box.addEventListener('mousedown', this.down.bind(this));
    }
    down(ev) {
        this.disX = ev.pageX - this.box.offsetLeft;
        this.disY = ev.pageY - this.box.offsetTop;
        document.addEventListener('mousemove', this.u = this.move.bind(this));
        document.addEventListener('mouseup', this.m = this.up.bind(this));
    }
    move(ev) {
        // this.dL = ev.pageX - this.disX;
        // this.dT = ev.pageY - this.disY;
        this.box.style.left = ev.pageX - this.disX + 'px';
        this.box.style.top = ev.pageY - this.disY + 'px';
        this.l1 = ev.pageX - this.disX;
        this.t1 = ev.pageY - this.disY;
        this.r1 = this.l1 + this.box.offsetWidth;
        this.b1 = this.t1 + this.box.offsetHeight;
        this.l2 = box2.offsetLeft;
        this.t2 = box2.offsetTop;
        this.r2 = this.l2 + this.box2.offsetWidth;
        this.b2 = this.t2 + this.box2.offsetHeight;
        if (this.r1 < this.l2 || this.b1 < this.t2 || this.l1 > this.r2 || this.t1 > this.b2) {
            this.box2.style.background = 'pink';
        } else {
            this.box2.style.background = 'gold';
        }
    }
    up() {
        document.removeEventListener('mousemove', this.u);
        document.removeEventListener('mouseup', this.m);
    }

}

new Drag('box', 'box2');

*/

//自定义滚动
let d3H = div3.offsetHeight;
let d4H = div4.scrollHeight;
if (d3H > d4H) {
    div1.style.display = 'none';
} else {
    div1.style.display = 'block';
}
let divH = d3H / d4H * div1.offsetHeight;
if (divH < 20) {
    div = 20;
}
div2.style.height = divH + 'px';

let disY = 0;
let down = '';
let move = '';
let up = '';

div2.addEventListener('mousedown', down = function (ev) {
    disY = ev.pageY - div2.offsetTop;
    ev.preventDefault();
    document.addEventListener('mousemove', move = function (ev) {
        let dT = ev.pageY - disY;
        if (dT < 0) {
            dT = 0;
        }
        if (dT > div1.offsetHeight - div2.offsetHeight) {
            dT = div1.offsetHeight - div2.offsetHeight;
        }

        let scale = dT / (div1.offsetHeight - div2.offsetHeight);
        div4.style.top = (d3H - d4H) * scale + 'px';
        div2.style.top = dT + 'px';

    })
    document.addEventListener('mouseup', up = function () {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
    })
});

myScroll(document, function (o) {
    let t = div2.offsetTop;
    console.log(t);
    if (o > 0) {
        t -= 5;
        if (t < 0) t = 0;
        let scale = t / (div1.offsetHeight - div2.offsetHeight);
        div4.style.top = (d3H - d4H) * scale + 'px';
        div2.style.top = t + 'px';
    } else {
        t += 5;
        if (t > div1.offsetHeight - div2.offsetHeight) {
            t = div1.offsetHeight - div2.offsetHeight;
        }
        let scale = t / (div1.offsetHeight - div2.offsetHeight);
        div4.style.top = (d3H - d4H) * scale + 'px';
        div2.style.top = t + 'px';
    }
})
let timer = null;
div1.addEventListener('mousedown', function (ev) {
    (function animate() {
        let t=div2.offsetTop;
        timer = requestAnimationFrame(animate);
        let { top, bottom } = div2.getBoundingClientRect();

        if (ev.pageY < top) {
            t -= 2;
        } else if (ev.pageY > bottom) {
            t += 2;
        } else {
            cancelAnimationFrame(timer);
        }
        let scale = t / (div1.offsetHeight - div2.offsetHeight);
        div4.style.top = (d3H - d4H) * scale + 'px';
        div2.style.top = t + 'px';
    })();
    div1.addEventListener('mouseup', function () {
        cancelAnimationFrame(timer);
    })
})







function myScroll(obj, fn) {
    if (obj.onmousewheel === undefined) {
        obj.addEventListener('DOMMouseScroll', wheel1);
    } else {
        obj.addEventListener('mousewheel', wheel2);
    }
    function wheel1(ev) {
        let o = true;
        o = ev.detail > 0 ? false : true;
        fn(o);
    }
    function wheel2(ev) {
        let o = true;
        o = ev.wheelDelta > 0 ? true : false;
        fn(o);
    }
}




