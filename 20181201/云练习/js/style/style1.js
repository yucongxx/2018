const header = document.getElementById('head');
const section = document.getElementById('section');
let hH = header.offsetHeight;
let IH = window.innerHeight;
section.style.height = IH - hH + 'px';


window.onresize = function () {
    IH = window.innerHeight;
    section.style.height = IH - hH + 'px';
}