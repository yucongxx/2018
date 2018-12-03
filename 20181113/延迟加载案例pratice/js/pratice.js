data.push(...data);
let temp = ``;
data.forEach(d => {
    temp += `<li index=${d.img}>
                <img  alt="">
                <span>${d.title}</span>
                <span>${d.time}</span>
                <span>${d.price}</span>
                <span>${d.hot}</span>
            </li>`;
});

list.innerHTML = temp;


let liBox = document.getElementsByTagName('li');
for (let i = 0; i < liBox.length; i++) {
    liBox[i].top = obj.offset(liBox[i]).top;
}

let IH = window.innerHeight;

let num = 0;
let timer = null;


fn();
window.onscroll=function (){
    clearInterval(timer);
    timer=setTimeout(()=>{
        fn();
    },500);
};



function fn() {
    for (let i = 0; i < liBox.length && num !== liBox.length; i++) {
        if (window.pageYOffset + IH > liBox[i].top) {
            if (liBox[i].getAttribute('index')) {
                let img = new Image;
                let linkPic = liBox[i].getAttribute('index');
                img.src = linkPic;
                img.onload = function () {
                    liBox[i].children[0].src = linkPic;
                    liBox[i].children[0].style.opacity = 1;
                    liBox[i].removeAttribute('index');
                    num++;
                }
                img.onerror = function () {
                    liBox[i].children[0].src = './img/timg.jpg';
                    liBox[i].children[0].style.opacity = 1;
                    liBox[i].removeAttribute('index');
                    num++;  
                }
            }
        }
    }
}
