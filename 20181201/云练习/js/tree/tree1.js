const treeMenu = document.getElementsByClassName('tree-menu')[0];
let { children, getChildren } = myTools;

function renderTree(pid, num) {
    treeMenu.innerHTML = '';
    let arr = getChild(pid);
    let ul = document.createElement('ul');
    num++;
    ul.style.paddingLeft = num * 5 + 'px';
    arr && arr.forEach(e => {
        let ary = getChild(e.id);
        let li = document.createElement('li');
        li.onclick = function (ev) {
            render(e.id);
            renderMenu(e.id);
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
                    ul.style.display='none';
                }else{
                    ul.style.display='block';
                }
            }
        }
        div.appendChild(span);
        li.appendChild(div);
        if(ary){
            li.appendChild(renderTree(e.id,num));
        }
        ul.appendChild(li);
    });
    return ul;
}

treeMenu.appendChild(renderTree(-1, -1));