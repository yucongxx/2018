const modalTree = document.getElementsByClassName('modal-tree')[0];
const remove = document.getElementById('remove');
const ok = modalTree.getElementsByClassName('ok')[0];
const cancel = document.getElementsByClassName('cancel')[0];
const content = document.getElementsByClassName('content')[0];
let kid = 0;
let { children, getChildren } = myTools;
remove.onclick = function () {
    if (!seleEleArr.length) {
        console.log('请选择想移动的文件');
    }
    modalTree.style.display = 'block';
    content.appendChild(renderTree2(-1, -1));
}

ok.onclick = function () {
    if (seleEleArr.length) {
        seleEleArr.forEach(e => {
            children.push(e);
            getChildren(e.id);
        })
        if (!children.some(e => e.id == kid)) {
            seleEleArr.forEach(e => {
                let arr = getChild(kid);
                if (arr.some(el => el.title === e.title)) {
                    e.title = e.title + '副本';
                }
                e.pid = kid;
                e.checked = false;
            });

            render(breadNav.getElementsByTagName('span')[0].dataset.id * 1);
            treeMenu.appendChild(renderTree2(-1, -1));
        } else {
            console.log('不能移动');
        }
        children.length = 0;
        modalTree.style.display = 'none';
    }
}

cancel.onclick = function () {
    modalTree.style.display = 'none';
}




function renderTree2(pid, num) {
    content.innerHTML = '';
    let arr = getChild(pid);
    let ul = document.createElement('ul');;
    num++;
    ul.style.paddingLeft = num * 5 + "px";
    arr && arr.forEach(e => {
        let ary = getChild(e.id);
        let li = document.createElement('li');
        li.onclick = function (ev) {
            let lis = content.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                lis[i].children[0].style.background = '';
            }
            li.children[0].style.background = '#999';
            kid = e.id;
            ev.cancelBubble = true;
        }
        let div = document.createElement('div');
        div.className = `tree-title ${ary ? 'tree-ico' : ''} close`;
        let span = document.createElement('span');
        span.className = `${ary ? 'open' : ''}`;
        span.innerHTML = '<i></i>' + e.title;
        div.appendChild(span);
        li.appendChild(div);
        if (ary) {
            li.appendChild(renderTree2(e.id, num));
        }
        ul.appendChild(li);
    });
    return ul;
}