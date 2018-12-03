const rename = document.getElementById('rename');

rename.onclick = function () {
    if (!seleEleArr.length) {
        console.log('请选择文件');
    } else if (seleEleArr.length > 1) {
        console.log('只能选择一个文件')
    } else {
        let id = breadNav.getElementsByTagName('span')[0].dataset.id * 1;
        let arr = getChild(id);
        // console.log(arr);
        arr = arr.filter(e => e.title != seleEleArr[0].title);
        const ele = document.getElementsByClassName('file-item');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].dataset.id == seleEleArr[0].id) {
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
                        data[ele[i].dataset.id].title=this.value;
                    }
                    render(id);

                }
            }
        }
    }
}
