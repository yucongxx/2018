let liBox = [...document.getElementsByTagName('li')];
let img = document.getElementsByTagName('img');
console.log(img[0]);


let iw = 1000;
let num = 1;
let timer = null;
let point = liBox[0];
let onOff = false;

next.onclick = function () {
    if (onOff) {
        return;
    }
    onOff = true;
    num++;
    if (num > 4) {
        num = 1;
    }
    img[1].src = 'img/banner' + num + '.jpg';
    swiper.style.left = -iw + 'px';
    point.className = '';
    liBox[num - 1].className = 'select';
    setTimeout(() => {
        img[0].src = 'img/banner' + num + '.jpg';
        swiper.style.transition = '';
        swiper.style.left = 0;
        setTimeout(() => {
            swiper.style.transition = '.3s';
            point = liBox[num - 1];
            onOff = false;
        }, 30)
    }, 310);
}


prev.onclick = function () {
    img[1].src = 'img/banner' + num + '.jpg';
    swiper.style.transition = '';
    swiper.style.left = -iw + 'px';
    num--;
    if (num < 1) {
        num = 4;
    }
    setTimeout(() => {
        img[0].src = 'img/banner' + num + '.jpg';
        swiper.style.transition = '.3s';
        swiper.style.left = 0;
        point.className = '';
        liBox[num - 1].className = 'select';
        point = liBox[num - 1];
    }, 30)
}

liBox.forEach((e, i) => {
    e.onclick = function () {
        if (num === i + 1) {
            return;
        }
        if (onOff) {
            return;
        }
        onOff = true;
        img[1].src = 'img/banner' + (i + 1) + '.jpg';
        swiper.style.left = -iw + 'px';
        point.className = '';
        liBox[i].className = 'select';
        setTimeout(() => {
            img[0].src = 'img/banner' + (i + 1) + '.jpg';
            swiper.style.transition = '';
            swiper.style.left = 0;
            setTimeout(() => {
                swiper.style.transition = '.3s';
                point = liBox[i];
                num = i + 1;
                onOff = false;
            }, 30)
        }, 310)
    }
})








timer = setInterval(next.onclick, 2000);
outer.onmouseover = function () {
    clearInterval(timer);
}

outer.onmouseout = function () {
    timer = setInterval(next.onclick, 2000);
}