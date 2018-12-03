/*
jQ的事件，都是事件绑定的（on 绑定的）

jQ的所有事件都是on()这个方法拓展出来的（基于on二次封装的）

    click()
    mouseover()


注意：
在事件套事件的时候，容易出现重复绑定的问题

解决方法:
在事件套事件的时候，要把上一次的事件清掉，使用off();
    off(可以放精确的范围)
    比如：具体的事件名，事件名的class
*/



// $('#btn').click(function (){
//     $('#box').off().click(function (){
//         console.log(1);
//     });
// });


// $('#btn').click(function () {
//     $('#box').off('click.xxx');
// })


// $('#box').click(function () {
//     console.log(1);
// });

// $('#box').on('click.xxx', function () {
//     console.log(2);
// })



/*
on('不带on的事件名'，fn)-> on('click,function (){})
on('不带on的事件名',target,fn)->事件委托
on('不带on的事件名'，{key:value},fn)

jQuery的event对象是二次封装的对象，增加了很多东西

ev.data  是绑定的数据

如果在jquery的event下没有原生的事件对象属性，可以去
ev.originalEvent(原生事件对象)下查找

*/

// let arr=['111','222','333'];

// arr.forEach(e=>{
//     let $btn=$('<button>按钮</button>');
//     $btn.on('click',{e},function (ev){
//         console.log(ev);
//         // console.log(ev.data.e);
//     })
//     $('#box').append($btn);
// });

