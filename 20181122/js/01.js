//自定义滚动条
/*
let contxtH = div4.scrollHeight;
let divH = div3.clientHeight;

if (contxtH > divH) {
    div1.style.display = 'block';
    let h = Math.floor(div1.clientHeight * (divH / contxtH));
    if (h < 20) {
        h = 20;
    }
    div2.style.height = h + 'px';

} else {
    div1.style.display + 'none';
}

div2.addEventListener('mousedown', function (ev) {
    let disY = ev.pageY - div2.offsetTop;
    function move(ev) {
        let div2H = ev.pageY - disY;
        if (div2H < 0) {
            div2H = 0;
        } else if (div2H > div1.clientHeight - div2.clientHeight) {
            div2H = div1.clientHeight - div2.clientHeight;
        }
        let scale = div2H / (div1.clientHeight - div2.clientHeight);
        div4.style.top = (div3.clientHeight - div4.clientHeight) * scale + 'px';
        div2.style.top = div2H + 'px';

    }
    function up() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
    ev.preventDefault();
})


document.addEventListener('mousewheel', function (ev) {
    let t = div2.offsetTop;
    let scale = t / (div1.offsetHeight - div2.offsetHeight);
    if (ev.wheelDelta > 0) {
        t -= 5;
        if (t < 0) {
            t = 0;
        }
        div2.style.top = t + 'px';
        div4.style.top = (div3.offsetHeight - div4.offsetHeight) * scale + 'px';
    } else {
        t += 5;
        if (t > div1.offsetHeight - div2.offsetHeight) {
            t = div1.offsetHeight - div2.offsetHeight;
        }
        div2.style.top = t + 'px';
        div4.style.top = (div3.offsetHeight - div4.offsetHeight) * scale + 'px';
    }
    ev.preventDefault();
})

*/


//放大镜
/*
box.onmouseenter = function () {
    mark.style.display = 'block';
    bigBox.style.display = 'block';
}
box.onmouseleave = function () {
    bigBox.style.display = 'none';
    mark.style.display = 'none';
}

let { right, bottom } = box.getBoundingClientRect();

box.onmousemove = function (ev) {
    let disX = ev.pageX - (mark.offsetWidth / 2);
    let disY = ev.pageY - (mark.offsetHeight / 2);
    if (disX < 0) {
        disX = 0;
    } else if (disX > box.offsetWidth - mark.offsetWidth - 1) {
        disX = box.offsetWidth - mark.offsetWidth - 1;
    }
    if (disY < 0) {
        disY = 0;
    } else if (disY > box.offsetHeight - mark.offsetHeight - 1) {
        disY = box.offsetHeight - mark.offsetHeight - 1;
    }
    let scaleX = disX / (box.offsetWidth - mark.offsetWidth);
    let scaleY = disY / (box.offsetHeight - mark.offsetHeight);
    img.style.left = (bigBox.offsetWidth - img.offsetWidth) * scaleX + 'px';
    img.style.top = (bigBox.offsetHeight - img.offsetHeight) * scaleY + 'px';

    mark.style.left = disX + 'px';
    mark.style.top = disY + 'px';

}

*/

//推箱子
/*
let onOff = false;
let timer = null;
let num = 0;
let obj = {
    37: false,
    38: false,
    39: false,
    40: false
};


window.onkeydown = function (ev) {
    obj[ev.keyCode] = true;
    if (onOff) {
        return;
    }
    onOff = true;
    move();
    console.log(1);
}

window.onkeyup = function (ev) {
    obj[ev.keyCode] = false;
    for (let attrs in obj) {
        num += obj[attrs];
    }
    if (!num) {
        cancelAnimationFrame(timer);
        onOff = false;
    }
    console.log(obj);
}

function move() {
    (function animate() {
        timer = requestAnimationFrame(animate);
        if (obj[37]) {
            box.style.left = box.offsetLeft - 5 + 'px';
        }
        if (obj[38]) {
            box.style.top = box.offsetTop - 5 + 'px';
        }
        if (obj[39]) {
            box.style.left = box.offsetLeft + 5 + 'px';
        }
        if (obj[40]) {
            box.style.top = box.offsetTop + 5 + 'px';
        }
    })();
}

*/

//画框
/*
document.onmousedown = function (ev) {
    kuang.style.display = 'block';
    let disX = ev.pageX;
    let disY = ev.pageY;
    kuang.style.left = disX + 'px';
    kuang.style.top = disY + 'px';

    document.onmousemove = function (ev) {
        let l = Math.min(ev.pageX, disX);
        let t = Math.min(ev.pageY, disY);
        kuang.style.width = Math.abs(ev.pageX - disX) + 'px';
        kuang.style.height = Math.abs(ev.pageY - disY) + 'px';
        kuang.style.left = l + 'px';
        kuang.style.top = t + 'px';
    };
    document.onmouseup = function () {
        kuang.style.display = 'none';
        kuang.style.width = 0;
        kuang.style.height = 0;
        document.onmouseup = null;
        document.onmousemove = null;
    }
};
*/

//无限级菜单
/*
function render(data) {
    let temp = '';
    data.forEach(item => {
        temp += '<li>';
        temp += `<span class=${item.child ? 'add' : ''}>
                ${item.title}
                </span>`
        if (item.child) {
            temp += '<ul>'
            temp += render(item.child);
            temp += '</ul>'
        }
        temp += '</li>';
    })
    return temp;
}

oUl.innerHTML = render(data);

let liBox = document.getElementsByTagName('li');
for (let i = 0; i < liBox.length; i++) {
    liBox[i].onclick = function () {
        if(liBox[i].children[1]){
            console.log(liBox[i].children[1]);
            liBox[i].children[1].style.display='block';
        }
    }
}

*/

//新建文件夹

