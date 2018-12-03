let folders = document.querySelector('.folders');


function render(data) {
    let temp = '';
    for (let attrs in data) {
        let item = data[attrs];
        if (item.pid === 0) {
            temp += `<div class="file-item" data-id="${item.id}">`;
            temp += `<img src="img/folder-b.png" alt="" />
                                <span class="folder-name">${item.title}</span>
                                <input type="text" class="editor"/>`
            if (item.checked) {
                temp += `<i class="checked"></i>`;
            } else {
                temp += `<i></i>`;
            }
            temp += '</div>';
        }
    };
    return temp
}
folders.innerHTML = render(data);


(function enter() {
    let foldersD = [...document.querySelectorAll('.folders div')];
    let label = [...document.querySelectorAll('.folders i')];
    foldersD.forEach((e) => {
        e.addEventListener('click', fn);
        function fn() {
            let temp = '';
            for (let attrs in data) {
                let item = data[attrs];
                if (item.pid === parseFloat(this.dataset.id)) {
                    temp += `<div class="file-item" data-id="${item.id}">`;
                    temp += `<img src="img/folder-b.png" alt="" />
                                        <span class="folder-name">${item.title}</span>
                                        <input type="text" class="editor"/>`
                    if (item.checked) {
                        temp += `<i class="checked"></i>`;
                    } else {
                        temp += `<i></i>`;
                    }
                    temp += '</div>';
                }
                
            };
            folders.innerHTML = temp;          
            enter();
        }
    })
})();


