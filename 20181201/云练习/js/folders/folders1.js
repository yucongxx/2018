const folderCont = document.getElementsByClassName('folder-content')[0];
// const checkall = folderCont.getElementsByClassName('checkall')[0];
const breadNav = folderCont.getElementsByClassName('bread-nav')[0];
const fEmpty = folderCont.getElementsByClassName('f-empty')[0];
const folders = folderCont.getElementsByClassName('folders')[0];
const breadmenu = folderCont.getElementsByClassName('breadmenu')[0];
const fBox = document.getElementById('fBox');
const checkAll = folderCont.getElementsByClassName('checkall')[0].children[0];
console.log(folders);
let { getChild, getParents, addAttr } = myTools;
let selectArr = [];
addAttr('num', []);

function render(pid) {
    selectArr.length = 0;
    folders.innerHTML = '';
    let arr = getChild(pid);
    if (!arr) {
        fEmpty.style.display = 'block';
        checkAll.className = '';
    } else {
        checkAll.className = arr.every(e => e.checked) ? 'checked' : '';
        fEmpty.style.display = 'none';
        arr.forEach((e) => {
            if (e.checked) selectArr.push(e);
            // console.log(selectArr);
            let div = document.createElement('div');
            div.className = e.checked ? 'file-item active' : 'file-item';
            div.dataset.id = e.id;

            let img = new Image();
            img.src = "img/folder-b.png";
            img.ondblclick = function () {
                render(e.id);
                renderMenu(e.id);
                arr.forEach(e => e.checked = false);
            }
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = e.title;

            let input = document.createElement('input');
            input.type = 'text';
            input.className = 'editor';

            let i = document.createElement('i');
            i.className = e.checked ? 'checked' : '';

            i.onclick = function () {
                e.checked = !e.checked;
                render(pid);

            }

            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
            folders.appendChild(div);
        });

    };
};

render(0);
