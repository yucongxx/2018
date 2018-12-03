let myTools = (function () {
    //获取传入id的子元素
    function getChild(pid) {
        let onOff = false;
        let arr = [];
        for (let k in data) {
            if (data[k].pid === pid) {
                arr.push(data[k]);
                onOff = true;
            }
        }
        if (onOff) {
            return arr;
        } else {
            return null;
        }
    }

    function getParent(id) {
        if (data[id].pid === -1 || !data[id]) {
            return null;
        }
        return data[data[id].pid];
    }

    function getParents(id) {
        let parentsArr = [];
        let now = data[id];//设置当前的传入id的数据对象
        while (now) {
            parentsArr.unshift(now);//把当前传入id的数据对象放入数组的第一项
            now = getParent(now.id);//将now重新赋值为父级的数据对象
        }
        return parentsArr;//循环至now为null返回所有传入id的祖先级数组
    }

    function duang(obj1, obj2) {
        let l1 = obj1.offsetLeft;
        let t1 = obj1.offsetTop;
        let b1 = t1 + obj1.offsetHeight;
        let r1 = l1 + obj1.offsetWidth;

        let l2 = obj2.offsetLeft;
        let t2 = obj2.offsetTop - folders.scrollTop;
        let b2 = t2 + obj2.offsetHeight;
        let r2 = l2 + obj2.offsetWidth;

        if (r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2) {
            return false;
        } else {
            return true;
        }
    }

    function targetP(ele, cName) {
        if (ele.classList.contains(cName)) {
            return true;
        }
        return ele.parentNode.classList.contains(cName);
    }

    function addAttr(attr, value) {
        for (let k in data) {
            if (Array.isArray(value)) {
                data[k][attr]=[];
            }else{
                data[k][attr]=value;
            }
        }
    }
    return {
        getChild,
        getParent,
        getParents,
        duang,
        targetP,
        addAttr
    }
})();
