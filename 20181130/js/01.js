/*
https://www.jquery123.com/  中文文档。

一般公司里面用的是1.72左右的版本，这个版本兼容ie

在jquery能写原生，原生必须引jq才能用

$(function (){
    //ready事件
})
$()->函数名+括号

$(function (){
    // alert(1);
    $('img').css({
        width:400,
        height:200,
        position:'absolute',
        top:0,
        left:0
    });

    $(document).click(function (){
        // $('img').hide();
        // $('img').toggle();

        // $('img').animate({
        //     width:1920,
        //     height:1000,
        //     left:100,
        // });
    });
});

*/


/*
    选择器
        #box
        .li
        li
    属性选择器
        $('ele[属性key=属性val]')->$('li[class='li1']')

    伪类选择器
        :first..
        :even 匹配所有索引值为偶数的元素，从0开始计数（现实中从1开始的奇数）
        :odd 匹配所有索引值为奇数的元素
        :lt(num)小于某个索引
        :gt(num)大于某个索引
        :checked 匹配所有选中的被选中元素（复选框，单选框，不包括select中的option）

    val('写要设置的内容')->value

    html()->innerHTML
    text()->innerText
*/



// $('#box').css('border','1px solid #000');
// $('li').css('background','red');

// $('input:first').val('设置你了');
// $('input[type="text"]').val('也设置你了');
// $('input[type="button"]').val('不点击');

// $('li[class^="li1"]').css('background','red');

// $('li:even').css('background','red');
// $('li:odd').css('background','red');
// $('li:lt(3)').css('background','red');
// $('li:gt(3)').css('background','green');

// let arr = [];
// $('input[value="按钮"]').click(function () {
//     let checked = $('input:checked');
//     for (let i = 0; i < checked.length; i++) {
//         arr.push($(checked[i]).val());
//     }
//     console.log(arr);
// });


/*
    jquery对象转原生对象
    加下标即可

    $('li')->jquery对象
    $('li')[0]->原生对象

    原生对象转jquery对象
    $(包原生对象)

    JQ转原生
    
*/

// $('#btn')[0].innerHTML='按一下';

/*
    $(ele).attr('key','val')

    jquery中基本上都有一个特性

    传一个参数（字符串）是获取，传对象，批量设置
    传2个参数是设置

    prop专门操作表单元素
    $('input').prop('checked',false);
*/


// $('#btn').click(function () {
//     $(':checkbox').prop('checked', true);
// });

// $('#btn1').click(function () {
//     $(':checkbox').prop('checked', false);
// });

// $('#btn2').click(function () {
//     let check = $(':checkbox');
//     for (let i = 0; i < check.length; i++) {
//         if ($(check[i]).prop('checked')) {
//             $(check[i]).prop('checked', false);
//         } else {
//             $(check[i]).prop('checked', true);
//         }
//     }
// });

// $('#btn').click(function (){
//     console.log($(  '#btn').attr('index'));
//     $('#btn').attr('index','2');
//     // $('#btn').attr('index','');
//     // $('#btn').removeAttr('index');
// });

// $('#btn').attr({
//     'index':'2',
//     idd:'x'
// })

// $('#btn').css('width','100px');

// $('#btn').css({
//     width:'100px',
//     height:'100px'
// })


// $('#btn').click(function () {
//     // $('input').attr('checked');
//     // $('input').prop('checked',false);
// });


/*
index()
默认以父级为基准，找到子级的索引

小技巧：
在使用index的时候，把精确匹配的条件加上

index('button')
以一堆button为依据，当前点击的是谁

siblings()

以当前节点为基准的所有兄弟节点

小技巧
因为兄弟节点包含的元素很多，使用时候把精确匹配条件加上
siblings('div)
找到所有兄弟节点为div的元素

addClass()添加class
removeClass()删除class

eq(index)
找到一组元素的某个，并且还是jquery对象

$(ele).each((i,e)=>{})

*/

// $('button').each(function (i,e){
//     $(this).click(function (){
//         alert(i);
//     });
// });

// $('button').click(function (){
//     alert($(this).index());
// });

// $('button').click(function (){
//     $('button').attr('class','');
//     $($('button')[$(this).index()]).attr('class','active');
// });


// $('button').click(function (){
//     $('button').removeClass('active');
//     $('button').eq($(this).index()).addClass('active');

// });


// $('button').click(function (){
//     $(this).addClass('active').siblings('button').removeClass('active');
//     $('div').eq($(this).index('button')).addClass('show').siblings('div').removeClass('show');
// });


/*
    jquery('#box)-><div id="box"></div>
    jquery(function (){
        ready
    })
    noConflict为了解决重命名的问题
    jquery不可能每次都在window环境下，比如可能会在node，全局为this
    在浏览器中去哪聚为window
*/

// (function (global, factory) {
//     factory(global);
// })(typeof window !== 'undefined' ? window : this, function (global, noGlobal) {
//     function JQuery(selector) {
//         if (typeof selector === 'string') {
//             selector = document.querySelectorAll(selector);
//             this.ele = selector;
//         } else if (typeof selector === 'function') {
//             document.addEventListener('DOMContentLoaded', function () {
//                 selector();
//             });
//         }
//     }
//     /*
//     一个参数为字符串的时候是获取，是对象就批量设置
//     */
//     JQuery.prototype.css = function () {
//         if (arguments.length === 1) {
//             if (typeof arguments[0] === 'string') {
//                 return getComputedStyle(this.ele[0])[arguments[0]];
//             }
//         }
//     }
//     window.$ = window.jQuery = JQuery;
// });


// // $(function () {
// //     console.log($('#box').css('height'));
// // })

(function (global, factory) {
    factory(global);
})(typeof window != 'undefined' ? window : this, function (global, noGlobal) {
    function JQuery(selector) {
        return new Ts(selector);
    }
    JQuery.fn = JQuery.prototype = {
        constructor: JQuery,
        css: function () {
            if (arguments.length === 1) {
                if (typeof arguments[0] === 'string') {
                    return getComputedStyle(this.ele[0])[arguments[0]];
                }
            }
        }
    }
    var Ts = JQuery.fn.ts = function (seletcor) {
        if (typeof seletcor === 'string') {
            seletcor = document.querySelectorAll(seletcor);
            this.ele = seletcor;
        } else if (typeof seletcor === 'function') {
            document.addEventListener('DOMContentLoaded', function () {
                seletcor();
            });
        }
    }

    Ts.prototype = JQuery.fn;


    window.$ = window.JQuery = JQuery;
});

$(function(){
    console.log( $('#box').css('height') );
});