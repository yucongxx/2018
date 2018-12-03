(function (global, factory) {
    factory(global);
})(typeof window !== 'undefined' ? window : this, function (global, noGlobal) {
    //undefined容易被修改，函数不传参就是undefined，所以noGlobal能更准确的拿到undefined
    function jQuery(selector) {
        return new Ph(selector);//无new化操作
    }

    let fn = jQuery.prototype = {
        constructor: jQuery,
        html: function (temp) {
            for (let i = 0; i < this.length; i++) {
                this[i].innerHTML = temp;
            }
        }
    }

    jQuery.trim = function (str) {
        return str.replace(/(^\s+)|(zs+$)/g, '');
    }
    jQuery.type = function (data, dataType) {
        let toStr = Object.prototype.toString;
        return toStr.call(data) === `[object${dataType[0].toUpperCase() + dataType.substring(1).toLowerCase()}]`;
    }

    function Ph(selector) {
        if (selector.nodeType === 1) {//检查传入参数是否是元素
            return selector;
        }
        if (typeof selector === 'string') {
            /*
            如果直接返回元素，是用不了jquery方法的，既要获得
            元素，也要让返回值用自己写的方法，所以要循环元素
            把元素挂在实例上
            */
            let ele = document.querySelectorAll(selector);
            for (let i = 0; i < ele.length; i++) {
                this[i] = ele[i];
            }
            this.length = ele.length;
        } else if (typeof selector === 'function') {
            document.addEventListener('DOMContentLoaded', function () {
                selector();
            });
        }
    }
    Ph.prototype = fn;
    global.$ = global.jQuery = jQuery;
});

// console.log($.trim('       .322122     '));
// $('#box').html('<p>啊啊啊啊</p>');
// $('li').html('aaaaa');
console.log($('#box'));