//方法
let method = (function () {
    function toDou(val) {
        return val < 10 ? '0' + val * 1 : val;
    }

    function dou(ele, attr, n, callback) {
        let arr = [];
        let timer = null;
        let num = 0;
        for (let i = n; i > 0; i -= 2) {
            arr.push(-i, i);
        }
        arr.push(0);
        let begin = parseFloat(getComputedStyle(ele)[attr]);
        timer = setInterval(() => {
            ele.style[attr] = begin + arr[num] + 'px';
            num++;
            if (num > arr.length) {
                clearInterval(timer);
                num = 0;
                callback && callback();
            }
        }, 16.7);
    }
    return {
        toDou,
        dou
    }
})();


//============================================================
const list = document.querySelectorAll('#main li');
console.log(list);
const $ = method;
let temp = '';
const footer1 = document.getElementById('footer1'),
    zong = document.getElementById('zong');
let n = 0;

function goods(li) {
    // let li = list[0];
    // console.log(li);
    let bg = li.querySelector('.bg');
    let txt = li.querySelector('.inputdate');
    let btn = li.querySelector('.start');
    let spans = li.querySelectorAll('.times span');
    let img = li.querySelector('img');
    let h5 = li.querySelector('h5');
    let price = li.querySelector('.price');
    let bigC = li.querySelector('.big-c');
    li.timer = null;

    btn.onclick = function () {
        let v = txt.value;
        let date = new Date(v);//未来时间
        clearInterval(li.timer);
        li.timer = setInterval(() => {
            let nowDate = new Date();
            let s = Math.floor((date - nowDate) / 1000);
            if (s < 0) {
                clearInterval(li.timer);
                $.dou(li, 'left', 10, function () {
                    bigC.style.visibility = 'visible';
                    bg.style.display = 'block';
                    bigC.style.transform = 'scale(1)';

                    setTimeout(function () {
                        temp += ` 
                       <ul class="list1">
                           <li class="li4">${h5.innerHTML}</li>
                           <li class="li5">${price.innerHTML.substring(1)}</li>
                           <li class="li6">
                               <img src="${img.src}">
                           </li>
                       </ul>
                       `;
                        footer1.innerHTML = temp;
                        n += price.innerHTML.substring(1) * 1;
                        zong.innerHTML = '合计: ' + n + '元';
                    }, 35);
                })
            } else {
                let h = Math.floor(s / 3600);
                s %= 3600;
                let m = Math.floor(s / 60);
                s %= 60;
                let str = $.toDou(h) + $.toDou(m) + $.toDou(s);
                console.log(str);

                for (let i = 0; i < str.length; i++) {
                    spans[i].innerHTML = str[i];
                }
            }

        }, 1000);


    }
}



for (let i = 0; i < list.length; i++) {
    goods(list[i]);
}









