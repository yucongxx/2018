//正则

/*let str='abc';

function fn(str,arg){
    let re=new RegExp(arg);
    console.log(re.test(str));
}
fn(str,'b');


.test(str) 返回：true/false

修饰符
    i：忽略大小写

let str='bcA';
let re=/a/i;

console.log(re.test(str));


*/



//注册信息验证案例

// const inputs = Array.from(document.querySelectorAll('input'));
//把类数组转成数组

// let re = {
//     qq: /^[1-9]\d{4,10}$/,
//     email: /^[A-Za-z]\w{5,17}@[1-9A-Za-z]{2,8}(\.(com|cn|net)){1,2}$/,
//     phone: /^1[345789]\d{9}$/,
//     day: /^\d+\D+\d+\D+\d+\D*$/
// }

// let arr = [];//主要存储每一次验证的结果，有几个输入框就有几个布尔值

// inputs.forEach((ele, i) => {
//     arr.push(false);
//     ele.cName = ele.className;
//     ele.oninput = function () {
//         if (re[this.cName].test(this.value)) {
//             this.classList.remove('fail');
//             this.classList.add('success');
//             arr[i] = true;
//         } else {
//             this.classList.remove('success');
//             this.classList.add('fail');
//             arr[i] = false;
//         }

//         btn.disabled = !arr.every(e => e);
//         btn.className = !arr.every(e => e) ? 'bnd' : 'nd';
//     }
// })

// let arr2=[1,1,2,1,1,1];
// console.log(arr2.every(n=>n==1));


//设置的时间如果不正常，输入的时间和获取的时间不一样

// let t = new Date('2018-2-29');

// console.log(t.getMonth()+1);


/*
JSON->数据格式

本质是字符串

'{"key":"value"}'||'[]'都叫JSON

都是高版本浏览器使用的，低版本用json2.js

JSON转对象->JSON.parse(JSON);
转不了undefined和函数（一转就报错）

第一个参数：json
第二个参数：callback
    可以进一步处理数据(key,val)=>{}

    对象转JSON->JSON.stringify(obj);
    转不了undefined和函数（转完后不会显示）
*/

// let json = '{"key":"VALUE","key2":null,"keyx":12,"keyy":"zhufeng"}';

// let obj = JSON.parse(json, (key, val) => {
//     console.log(key,val);
//     if (typeof val === 'string') {
//         return val[0].toUpperCase() + val.substring(1);
//     }
//     return val
// });

// console.log(obj);

/*
eval:
能把字符串以js的方式尽可能运行
*/

// let json="{'name':'钢铁侠'}";

// // console.log(eval('('+json+')'));

// console.log(new Function('','return'+json)());


/*
DOM映射
通过document提供获取页面标签的接口，这个获取的为元素对象
这个对象和标签是一一对应的关系

标签上的所有属性，都是能够和元素进行对应

id,classNaem,src,value

并不是所有的标签属性都是一一对应在第一层属性上的

box={
    id:'box',
    attributes:{
        index:{
            nodeName:
            nodeValue:1
        }
    }
}

DOM回流
    DOM中如果操作了某个元素的位置或者大小，会导致浏览器重新计算元素所占
    的位置，这样特别消耗性能，尽量少操作DOM

    批量操作DOM的时候最好使用字符串
    其次使用createElement(),appendChild...

    最后使用文档碎片
    let frg=document.createDocumentFragment();
    frg.append(ele1);
    frg.append(ele2);
    parentNode.appendChild(frg[ele1,ele2]);

    DOM重绘
    当页面中元素的背景或者字体颜色发生改变，
    那么浏览器要对元素进行重新的描绘，这种现象就是重绘

*/




const inputs = Array.from(document.querySelectorAll('input'));
console.log(inputs);

let re = {
    qq: /^[1-9]\d{4,10}$/,
    email: /^[A-Za-z]\w{5,17}@[1-9A-Za-z]{2,8}(\.(com|cn|net)){1,2}$/,
    phone: /^1[345789]\d{9}$/,
    day: /^\d+\D+\d+\D+\d+\D*$/
};

let arr = [];
inputs.forEach((ele, i) => {
    arr.push(false);
    ele.cName = ele.className;
    ele.oninput = function () {
        if (re[this.cName].test(this.value)) {
            ele.classList.add('success');
            ele.classList.remove('fail');
            arr[i] = true;
        } else {
            ele.classList.add('fail');
            ele.classList.remove('success');
            arr[i] = false;
        }
        console.log(arr,arr.every(e=>e));
        btn.disabled = !arr.every(e => e);
        btn.className = arr.every(e => e) ? 'nd' : 'bnd';
    }
    
  
})

console.log(arr);