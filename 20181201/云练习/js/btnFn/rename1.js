// const rename = document.getElementById('rename');

// rename.onclick = function () {
//     if (!selectArr.length) {
//         alert('请选择重命名文件');
//     } else if (selectArr.length > 1) {
//         alert('只能选择一个文件');
//     } else {
//         let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
//         let arr = getChild(id);
//         rv = true;
//         arr = arr.filter(e => e.title != selectArr[0].title);

//         let ele = folders.getElementsByClassName('file-item');
//         for (let i = 0; i < ele.length; i++) {
//             if (ele[i].dataset.id == selectArr[0].id) {
//                 ele[i].children[1].style.display = 'none';
//                 let txt = ele[i].children[2];
//                 txt.style.display = 'block';
//                 txt.select();
//                 let v = txt.value;
//                 txt.onmousedown = function (ev) {
//                     ev.cancelBubble = true;
//                 }

//                 txt.onblur = function(){
//                     if(!this.value.trim()){
//                         log('不能为空');
//                         this.value = v;
//                         txt.select();
//                         return;
//                     }

//                     let o = arr.some(e=>e.title == this.value);
//                     if(o){
//                         log('重复');
//                     }else{
//                         selectArr[0].title = this.value;
//                         // data[ele[i].dataset.id].title = this.value;
//                         render(id);
//                     }
//                 }
//             }
//         }
//     }

// }

const rename = document.getElementById('rename');

rename.onclick = function () {
    if (!selectArr.length) {
        console.log('请选择文件');
    } else if (selectArr.length > 1) {
        console.log('只能选择一个文件')
    } else {
        let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
        let arr = getChild(id);
        // console.log(arr);
        arr = arr.filter(e => e.title != selectArr[0].title);
        const ele = document.getElementsByClassName('file-item');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].dataset.id == selectArr[0].id) {
                ele[i].children[1].style.display = 'none';
                let txt = ele[i].children[2];
                txt.style.display = 'block';
                txt.select();
                let v = txt.value;
                txt.onblur = function () {
                    if (!this.value.trim()) {
                        console.log('不能为空');
                        this.value = v;
                        txt.select();
                        return;
                    }
                    let o = arr.some(e => e.title == this.value);
                    if (o) {
                        console.log('不能重复命名');
                    } else {
                        data[ele[i].dataset.id].title = this.value;
                    }
                    render(id);

                }
            }
        }
    }
}
