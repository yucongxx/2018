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
    return {
        getChild,
        getParent,
        getParents
    }
})();


