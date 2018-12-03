const kuang = document.getElementsByClassName('kuang')[0];

console.log(kuang);

let { duang, targetP } = myTools;

let rv = false;

folders.addEventListener('mousedown', function (ev) {
    // console.log(ev.target);
    ev.returnValue = rv;
    rv = false;
    if (targetP(ev.target, 'file-item')) return;
    // console.log(targetP(ev.target,'file-item'));
    let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
    // console.log(id);
    let arr = getChild(id);
    let { top, left } = fBox.getBoundingClientRect();
    let fileItem = document.getElementsByClassName('file-item');
    // console.log(fileItem);
    for (let i = 0; i < fileItem.length; i++) {
        if (arr && arr[i]) {
            arr[i].checked = false;
            
            render(id);
        }
    }
    selectArr.length = 0;

    kuang.style.display = 'block';
    let disX = ev.pageX - left;
    let disY = ev.pageY - top;
    kuang.style.left = disX + 'px';
    kuang.style.top = disY + 'px';

    let move = function (ev) {
        let l = ev.pageX - left;
        let t = ev.pageY - top;
        kuang.style.left = Math.min(l, disX) + 'px';
        kuang.style.top = Math.min(t, disY) + 'px';
        kuang.style.width = Math.abs(disX - l) + 'px';
        kuang.style.height = Math.abs(disY - t) + 'px';

        selectArr.length = 0;

        for (let i = 0, len = fileItem.length; i < len; i++) {
            if (duang(kuang, fileItem[i])) {
                fileItem[i].classList.add('active');
                fileItem[i].children[3].className='checked';
                selectArr.push(data[fileItem[i].dataset.id * 1]);
                data[fileItem[i].dataset.id * 1].checked = true;
                console.log(selectArr);
            } else {
                fileItem[i].classList.remove('active');
                fileItem[i].children[3].className='';        
                data[fileItem[i].dataset.id*1].checked = false;
            }

        }
        checkAll.className = arr.every(e => e.checked) ? 'checked' : '';

    };
    let up = function () {
        kuang.style.display = 'none';
        kuang.style.width = 0;
        kuang.style.height = 0;
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mousemove', up);
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
})

checkAll.onclick = function () {
    let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
    let arr = getChild(id);
    console.log(arr);
    this.classList.toggle('checked');
    arr && arr.forEach(e => {
        e.checked = this.classList.contains('checked');
    })
    render(id);

}