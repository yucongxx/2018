const head = document.getElementById('head');
const section = document.getElementById('section');
let IH = window.innerHeight;
const headH = head.offsetHeight;
section.style.height = IH - headH + 'px';


window.onresize = function () {
    let IH = window.innerHeight;
    section.style.height = IH - headH + 'px';
}