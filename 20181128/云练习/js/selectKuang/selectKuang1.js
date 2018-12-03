const kuang = document.getElementsByClassName('kuang')[0];
let { duang } = myTools;

folders.addEventListener('mousedown', function (ev) {
    if (targetP(ev.target, 'file-item')) return;
    let { left, top } = fBox.getBoundingClientRect();
    let fileItem = folders.getElementsByClassName('file-item');
    let disX = ev.pageX - left;
    let disY = ev.pageY - top;
    kuang.style.display = 'block';
    kuang.style.left = disX + 'px';
    kuang.style.top = disY + 'px';
    console.log(kuang.style.left, kuang.style.top);
    for (let i = 0; i < fileItem.length; i++) {
        fileItem[i].classList.remove('active');
        if (fileItem[i].children[3].className) {
            fileItem[i].children[3].className = '';
        }
        checkall.className = '';
    }
    seleEleArr.length = 0;

    let move = function (ev) {
        ev.preventDefault();
        seleEleArr.length = 0;
        let l = ev.pageX - left;
        let t = ev.pageY - top;
        kuang.style.left = Math.min(ev.pageX - left, disX) + 'px';
        kuang.style.top = Math.min(ev.pageY - top, disY) + 'px';
        kuang.style.width = Math.abs(l - disX) + 'px';
        kuang.style.height = Math.abs(t - disY) + 'px';

        for (let i = 0, len = fileItem.length; i < len; i++) {
            console.log(i);
            if (duang(kuang, fileItem[i])) {
                fileItem[i].classList.add('active');
                fileItem[i].children[3].className = 'checked';
                seleEleArr.push(data[fileItem[i].dataset.id * 1]);
                console.log(seleEleArr);
                data[fileItem[i].dataset.id * 1].checked = true;

            } else {
                fileItem[i].classList.remove('active');
                fileItem[i].children[3].className = '';
                if (data[fileItem[i].dataset.id]) {
                    data[fileItem[i].dataset.id * 1].checked = false;
                }
            }
        }
        checkall.className = (seleEleArr.length == fileItem.length) ? 'checked' : '';


    }
    let up = function (ev) {
        kuang.style.width = kuang.style.height = 0;
        kuang.style.display = 'none';
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
});


checkall.onclick = function () {
    let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
    console.log(breadNav.getElementsByTagName('span')[0].dataset.id)    ;
    let arr = getChild(id);
    this.classList.toggle('checked');
    arr && arr.forEach(e => {
        e.checked = this.classList.contains('checked');
    });
    render(id);
}


