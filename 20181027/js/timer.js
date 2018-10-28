let arr = [
    1,
    2,
    3,
    4,
    5
];

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let pContent = document.getElementsByTagName('p')[0];


let timer = null,
    num = 0;
btn1.onclick = function () {
    timer = setInterval(function () {
        pContent.innerHTML = arr[num];
        num++;
        num %= arr.length;

    }, 60);
}

btn2.onclick = function () {
    clearInterval(timer);
}