let obj = (function () {
    /*1. 抖函数，可以让物体抖起来
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

    /*2. 不足10加0
    参数：传入数字，不足10前面补足0
    */
    function addZero(val) {
        return val < 10 ? '0' + val * 1 : val;
    }

    /*3. 获取元素绝对位置
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

    /*
    4. 物体运动函数: requestAnimationFrame多方位运动
    使用方法： move(元素,{动画属性（left）:{count:'20em',begin:2},top:'20em'},1000（做完运动需要多少时间）)
    例如： 
    move(box, {             =>元素
        left: {             =>动画属性
            count: '20em',  =>移动的距离
            begin: 2        =>元素的初始位置
        },
        top: '10em',        =>移动的距离
        fontSize:30         =>运动过程中改变的字体大小
        opacity: 0          =>改变透明度为0
    }, 1000);               =>做完整个运动需要的时间
    */

    function move(ele, attr, duration) {
        let timer = null;
        let time = 0;
        let unit = 'px';
        let v = null;
        let re = /px|em|rem/;//为了检验目标是否有单位设置的正则


        let j = {};
        for (let k in attr) {
            unit = 'px';
            if (typeof attr[k] === 'string' || typeof attr[k] === 'number') {
                let begin = parseFloat(getComputedStyle(ele)[k]);
                console.log(begin);
                if (typeof attr[k] === 'string') {
                    unit = attr[k].match(re) ? attr[k].match(re)[0] : 'px';
                }
                j[k] = {
                    count: parseFloat(attr[k]) - begin,
                    begin,
                    unit
                }

            } else {
                if (typeof attr[k].count === 'string') {
                    unit = attr[k].count.match(re) ? attr[k].count.match(re)[0] : 'px';
                }
                j[k] = {
                    count: parseFloat(attr[k].count) - attr[k].begin,
                    begin: attr[k].begin,
                    unit
                }

            }
        }
        console.log(j);

        (function animat() {
            timer = requestAnimationFrame(animat);
            time += 16.7;
            if (time >= duration) {
                time = duration;
            }
            for (let k in j) {
                // v = time / duration * j[k].count + j[k].begin;
                v = Tween.bounceIn(time, j[k].begin, j[k].count, duration);
                /*此处可改变运动的动画根据tween的方法
                （参数1：已用时间，参数2：初始位置，参数3：移动总距离，参数4：做完运动需要的时间）
                */
                if (attr === 'opacity') {
                    ele.style[k] = v;
                } else {
                    ele.style[k] = v + j[k].unit;
                }
            }

            if (time === duration) {
                cancelAnimationFrame(timer);
            }
        })();
    }

    return {
        dou,
        addZero,
        offset,
        move
    }
})();