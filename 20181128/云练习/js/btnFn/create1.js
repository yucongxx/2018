const create = document.getElementById('create');
create.onclick = function () {
    rv = true;
    fEmpty.style.display = 'none';
    let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
    let div = document.createElement('div');
    let v = '';
    div.className = 'file-item';

    let img = new Image();
    img.src = "img/folder-b.png";

    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'editor';
    console.log(id);
    if (!data[id].num.length) {
        data[id].num.push(0);
    } else {
        for (let i = 0; i < data[id].num.length + 1; i++) {
            if (data[id].num[i] === undefined) {
                data[id].num[i] = i;
                v = i;
                break;
            }
        }
    }
    if (v === 0) {
        v = '';
    }
    input.value = '新建文件夹' + v;
    input.style.display = 'block';
    input.onfocus = function () {
        rv = true;
    }
    input.onmousedown = function (ev) {
        ev.stopPropagation();
    }

    input.onblur = function () {
        let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
        let arr = getChild(id);
        let o = arr && arr.some(e => e.title == this.value);
        if (o) {
            console.log('文件名重复');
            this.value = '新建文件夹' + v;
            input.select();
            return;
        }
        if (this.value !== '新建文件夹' + v) {
            delete data[id].num[v];
            v = 'no';
            if (/^新建文件夹\d+$/.test(this.value)) {
                let n = this.value.match(/^新建文件夹(\d+)$/)[1] * 1;
                data[id].num[n] = n;
                v = n;
            }
        }

        let idn = +new Date;
        if (v === '') v = 0;
        data[idn] = {
            'id': idn,
            'pid': id,
            'title': input.value,
            'type': 'file',
            'checked': false,
            'num': []
        }
        if (v !== 'no') {
            data[idn].create = v;
        }
        console.log(data);
        render(id);

    }
    let span = document.createElement('span');
    let i = document.createElement('i');
    i.className = '';
    div.appendChild(img);
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(i);
    folders.appendChild(div);
    input.select();


}
