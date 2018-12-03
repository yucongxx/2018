let myTools = (function () {
    function getChild(pid) {
        if (!data[pid]) return null;
        let arr = [];
        let onOff = false;
        for (let attrs in data) {
            if (data[attrs].pid === pid) {
                arr.push(data[attrs]);
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
        if (!data[id] || data[id].pid === -1) {
            return null;
        }
        return data[data[id].pid];
    }

    function getParents(id) {
        let parentArr = [];
        let now = data[id];
        while (now) {
            parentArr.unshift(now);
            now = getParent(now.id);
        }
        return parentArr;
    }

    function targetP(ele,cName){
        if(ele.classList.contains(cName)){
            return true;
        }
        return ele.parentNode.classList.contains(cName);
    }

    function duang(obj1,obj2){
        let l1 = obj1.offsetLeft;
        let t1 = obj1.offsetTop;
        let b1 = t1 + obj1.offsetHeight;
        let r1 = l1 + obj1.offsetWidth;

        let l2 = obj2.offsetLeft;
        let t2 = obj2.offsetTop;
        let b2 = t2 + obj2.offsetHeight;
        let r2 = l2 + obj2.offsetWidth;
        
        if(r1<l2 || b1 < t2 || l1 > r2 || t1 > b2){
            return false;
        }else{
            return true;
        }
    }
    return {
        getChild,
        getParent,
        getParents,
        targetP,
        duang
    }
})();


