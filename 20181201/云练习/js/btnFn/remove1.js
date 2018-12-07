const tanbox = document.getElementById('tanbox');
const btns = tanbox.getElementsByTagName('a');
const del = document.getElementById('del');

del.onclick = function () {
    if (selectArr.length) {
        tanbox.style.display = 'block';
        btns[0].onclick = function () {
            selectArr.forEach(e => {
                if ('create' in data[e.id]) {
                    delete data[data[e.id].pid].num[data[e.id].create];
                }
                delete data[e.id];
            })
            tanbox.style.display = 'none';
            render(breadNav.getElementsByTagName('span')[0].dataset.id * 1);
            treeMenu.appendChild(renderTree(-1, -1));
        }
        btns[1].onclick = function () {
            tanbox.style.display = 'none';
        }
    } else {
        alert('请选择要删除的文件');
    }

}



document.onkeydown = function (ev) {
    if (ev.ctrlKey && ev.keyCode == 68) {
        del.onclick();
        ev.returnValue = false;
    } else {
        ev.returnValue = true;
    }
}   
