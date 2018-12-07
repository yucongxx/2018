const remove = document.getElementById('remove');
const ok = document.getElementsByClassName('ok')[0];
const cancel = document.getElementsByClassName('cancel')[0];
const modelTree = document.getElementsByClassName('modal-tree')[0];
const content = document.getElementsByClassName('content')[0];
const esc = document.getElementsByClassName('icon_close')[0];
let kid = 0;
let bId = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
remove.onclick = function () {
    if (!selectArr.length) {
        alert('请选择需要移动的文件');
    } else {
        modelTree.style.display = 'block';
        content.appendChild(renderTree2(-1, -1));
    }
}

ok.onclick = function () {
    if (selectArr.length) {
        selectArr.forEach(e => {
            children.push(e);
            getChildren(e.id);
        })
    }

    if (!children.some(e => e.id == kid)) {
        if (kid == breadNav.getElementsByTagName('span')[0].dataset.id * 1) {
           alert('error');
        }else {
            selectArr.forEach(e => {
                let arr = getChild(kid);
                if (arr && arr.some(el => el.title === e.title)) {
                    let a = arr.filter(f => {
                        let reg = new RegExp('^' + e.title + '(-副本)*$');
                        return reg.test(f.title);
                    }).sort((a, b) => {
                        return a.title.length - b.title.length;
                    })
                    if (a.length == 1) {
                        e.title = a[0].title + '-副本';
                    } else {
                        e.title = a[a.length - 1].title + '-副本';
                    }
                }
                e.pid = kid;
                e.checked = false;
            });
        };
        render(breadNav.getElementsByTagName('span')[0].dataset.id * 1);
        treeMenu.appendChild(renderTree(-1, -1));
    } else {
        alert('error');
    };
    children.length = 0;
    modelTree.style.display = 'none';

}

cancel.onclick = function () {
    modelTree.style.display = 'none';
}

esc.onclick = function () {
    modelTree.style.display = 'none';
}


function renderTree2(pid, num) {
    content.innerHTML = '';
    let arr = getChild(pid);
    let ul = document.createElement('ul');
    num++;
    ul.style.paddingLeft = num * 5 + 'px';
    arr && arr.forEach(e => {
        let ary = getChild(e.id);
        let li = document.createElement('li');
        li.onclick = function (ev) {
            let lis = content.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                lis[i].children[0].style.background = '';
            }
            li.children[0].style.background = '#f1f1f1';
            kid = e.id;
            console.log(kid);
            ev.cancelBubble = true;
        }
        let div = document.createElement('div');
        div.className = `tree-title ${ary ? 'tree-ico' : ''} close`;
        let span = document.createElement('span');
        span.className = `${ary ? 'open' : ''}`;
        span.innerHTML = `<i></i>${e.title}`;
        span.onclick = function () {
            let ul = this.parentNode.nextElementSibling;
            if (ul) {
                if (ary && !span.classList.toggle('open')) {
                    ul.style.display = 'none';
                } else {
                    ul.style.display = 'block';
                }
            }
        }
        div.appendChild(span);
        li.appendChild(div);
        if (ary) {
            li.appendChild(renderTree2(e.id, num));
        }
        ul.appendChild(li);
    });
    return ul;
}