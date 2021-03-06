/*
xxx.add('click,fn)

映射事件
add(btn,'点击',function(){
    console.log(this);
});
add(btn,'点击',function (){
    alert(2);
});

自定义事件：
1.收集器（订阅模式）add
目的就是为了收集事件名和事件函数
2.触发器（发布模式）trigger
当某个条件成立之后，执行对应事件的事件函数
3.解除器 off
销毁对应事件的事件函数

*/


//订阅模式，就是为了绑定事件和事件函数

/*

function add(ele, evName, fn) {
    //给对象绑定一个diy属性，值为对象
    //如果之前绑定过了，就用之前的,如果从来没有绑定过，就用{}
    ele.diy = ele.diy || {};
    ele.diy[evName] = ele.diy[evName] || [];
    ele.diy[evName].push(fn);
}


function trigger(ele, evName) {
    //如果元素没有绑定过这个事件，那么久返回null
    if (!ele.diy[evName]) return null;
    ele.diy[evName].forEach(fn => {
        fn.call(ele);
    });
}

function off(ele,evName,fnName){
    if(!ele.diy[evName])return null;
    
    //循环对象中对应的事件数组
    //找到数组中和第三个参数中的函数名一致的函数删除
    

    for(let i=0;i<ele.diy[evName].length;i++){
        if(ele.diy[evName][i].name===fnName.name){
            ele.diy[evName].splice(i,1);
            i--;
        }
    }
}

add(btn,'点击',function (){
    console.dir(this);
});

add(btn,'点击',fn);

function fn(){
    alert(2);
}


btn2.onclick=function (){
    off(btn,'点击',fn);
    console.log(btn.diy['点击']);
}

btn.onmousedown=function (ev){
    let x=ev.pageX;
    let y=ev.pageY;
    btn.onmouseup=function (ev){
        if(Math.abs(ev.pageX-x)<5&&Math.abs(ev.pageY-y)<5){
            trigger(btn,'点击');
        }
    }
}

*/


// jQ中的trigger

$('#btn').on('click',function (){
    console.log('第一次');
});

$('#btn').on('click.2',function (){
    console.log('第二次');
});

$('#btn2').on('click',function (){
    $('#btn').trigger('click.2');
})