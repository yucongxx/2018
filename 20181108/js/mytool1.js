let obj = (function () {
    /*抖函数，可以让物体抖起来
    参数1：需要操作的元素
    参数2：需要左右抖的话传'left',需要上下抖的话传'top'
    参数3：抖的频率：传的数值越大，抖的频率越大
    参数4：回调函数，如果存在callback则执行传入的函数
    */
    function dou(ele, attr, n, callback) {
        let arr = [];
        let timer = null;
        let num = 0;
        for (let i = n; i > 0; i -= 2) {
            arr.push(-i, i);
        }
        arr.push(0);
        let begin = parseFloat(getComputedStyle(ele)[attr]);
        timer = setInterval(() => {
            ele.style[attr] = begin + arr[num] + 'px';
            num++;
            if (num > arr.length) {
                clearInterval(timer);
                num = 0;

                if (callback) {
                    callback();
                }
            }

        }, 16.7)
    }

    /*不足10加0
    参数：传入数字，不足10前面补足0
    */
    function addZero(val) {
        return val < 10 ? '0' + val * 1 : val;
    }

    /*获取元素绝对位置
    参数：传入元素能计算出绝对位置的值，返回number数据类型
    */
    function offset(ele) {
        //先获取元素
        if (ele.nodeType === 1) {
            ele = ele;
        } else if (typeof ele === 'string') {
            ele = document.querySelector(ele);
        } else {
            return null;
        }
        //存目标元素的边框
        let bl = ele.clientLeft;
        let bt = ele.clientTop;
        let obj = {
            left: 0,
            top: 0
        }
        while (ele) {
            obj.left += ele.offsetLeft + ele.clientLeft;
            obj.top += ele.offsetTop + ele.clientTop;
            ele = ele.offsetParent;
        }
        obj.left -= bl;
        obj.top -= bt;
        return obj;
    }
    return {
        dou,
        addZero,
        offset
    }
})();