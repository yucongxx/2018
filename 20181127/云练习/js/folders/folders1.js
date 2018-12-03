const folderCont = document.getElementsByClassName('folder-content')[0];
const breadMenu = folderCont.getElementsByClassName('breadmenu')[0];
const checkall = folderCont.getElementsByClassName('checkall')[0].children[0];
const breadNav = folderCont.getElementsByClassName('bread-nav')[0];
const fEmpty = folderCont.getElementsByClassName('f-empty')[0];
const folders = folderCont.getElementsByClassName('folders')[0];
let seleEleArr = [];
let { getChild, getParent, getParents, targetP } = myTools;



function render(id) {
    folders.innerHTML = '';
    seleEleArr.length = 0;
    let arr = getChild(id);
    if (!arr) {
        fEmpty.style.display = 'block';
    } else {
        fEmpty.style.display = 'none';
        arr.forEach((e) => {
            let div1 = document.createElement('div');
            div1.className = e.checked ? 'file-item active' : 'file-item';
            div1.dataset.id = e.id;

            let img = new Image();
            img.src = "img/folder-b.png";
            img.ondblclick = function () {
                render(e.id);
                renderMenu(e.id);
            }

            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = e.title;

            let input = document.createElement('input');
            input.type = 'text';
            input.className = 'editor';

            let i = document.createElement('i');
            i.onclick = function () {
                e.checked = !e.checked;
                render(id);
            }
            i.className = e.checked ? 'checked' : '';
            div1.appendChild(img);
            div1.appendChild(span);
            div1.appendChild(input);
            div1.appendChild(i);
            folders.appendChild(div1);
        })
    }



};




render(0);

