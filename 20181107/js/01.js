/*

   正则方法：

    .test()
    .exec()

    string.match(//)
    string.replace(''|//,''|callback)

    元字符：
        \d
        \D
        \w
        \W
        \s
        \S
        \b
        \B
        \n
    
    修饰符
        i
        g
        m

    分组()

    范围[]
    数字：0-9
    字母：a-z|A-Z|A-za-z
    中文：\u4e00-u9fa5

    ^开头$结尾

    量词
        +
        ?
        * 最小没有，最多无限
        {n,m}
        [^abc]排除括号中的任意一项



*/

// let str = 'aca2ca3cabca0c';

// console.log(str.match(/a[^1]c/g));


// let str2 = '367321321313233543521321321'; 
//这个字符串有没有符合5-11位字符串正则的规则，只要有就直接返回
// console.log(/^[1-9]\d{4,10}$/.test(str2));


//偷数据
// let sum=0;
// let num=0;
// btn.onclick=function (){
//     let newS=txt.value.replace(/<[^>]+>/g,'');
//     newS.replace(/(\d+)\/月/g,function ($0,$1){
//         console.log($1);
//         sum+=$1*1;
//         num++;
//         console.log(num);
//     })
//     s.innerHTML='平均薪资'+(sum/num).toFixed(2)+'元';
//     box.innerHTML=newS;
// }


/*
    \b:边界符
    \B:非边界符

*/
// let str='sdasda asdsad sd ss';

// console.log(str.replace(/\b/g,'|'));

// let arr = [];
// let eles = document.getElementsByTagName('*');
// for (let i = 0; i < eles.length; i++) {
//     if (eles[i].className === 'li1') {
//         arr.push(eles[i]);
//     }
// }
// console.log(eles);

// for (let i = 0; i < eles.length; i++) {
//     if(eles[i].className){
//         let arr2=eles[i].className.split(' ');
//        arr2.forEach(str=>{
//            if(str==='li1'){
//               arr.push(eles[i]);
//            }
//        });
//     }
// }

//用正则来解决
/*
    li1     li2  /^li1\s+/
     li1         /\s+li1\s+/
    li12 li1     /^li1\s+/
    li1          /^li1$/


*/

// let s = 'li1';

// let re=new RegExp('(^|\\s+)'+s+'(\\s+|$)');
// let re=new RegExp('\\b'+s+'\\b');
// console.log(re);

// for (let i = 0; i < eles.length; i++) {
//     if (re.test(eles[i].className)) {
//         arr.push(eles[i]);
//         console.log(arr);
//     }
// }



// // console.log(arr);
// arr.forEach(e => {
//     console.log(e);
//     e.style.border='1px solid red';
// });



/*
    重复子项：
        在正则中可以分组，分组之后，
        可以通过分组的顺序（\+分组的顺序的number）拿到对应分组的内容
            有一个分组 \1 第一个子项
            有两个分组 \2 第二个子项
    注意：
        重复项不能放在子项的前面

           

*/

// let str='dd7sdss';
// str.replace(/(d)\1(7)(s)\1\3\3/,($0,$1)=>{
//     console.log($0);
// })


// let str='1111'

// str.replace(/(1)\1+/,($0,$1)=>{
//     console.log($0);
// })

//下列字符串中哪些是连续的字符，找出来放到数组中

// let str = 'd7ssssdssdgsad61iiii11w000mxwww1i';

// console.log(str.match(/(\w)\1+/g));


/*
    找出下面字符串中，出现次数最多的是谁，出现了几次？




*/

let str = 'dnsasudhusadssasdgsjdgddsjsddhaslfdiusadlhsdsfudahsful';

// let obj = {};

// for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) {
//         obj[str[i]] = 1;
//     } else {
//         obj[str[i]]++;
//     }
// }

// let n=0;
// let name='';
// for(let attr in obj){
//     if(obj[attr]>n){
//         n=obj[attr];
//         name=attr;
//     }
// }
// console.log(name,n);


// let str2 = str.split('').sort().join('');
// console.log(str2);
// let n=0;
// let name='';

// str2.replace(/([a-z])\1+/g, ($0, $1) => {
//     if($0.length>n){
//         n=$0.length;
//         name=$1;
//     }
// });
// console.log(name,n);


/*
    邮箱验证

    onchange  当失去焦点之后，如果内容发生变化就触发
    oninput 当用户在焦点元素上操作内容（添加，删除）的时候触发

    邮箱验证要求
    开头为字母，可以使用\w,4-18位，.com|cn|net

    /^[A-Za-z]\w{3,17}@[1-9A-Za-z]{2,8}\.(com|cn|net)$/

    . 任意符
        匹配除了‘\n’和‘\r’之外的任何单个字符，要匹配包括“\n”和"\r"在内的任何字符,请使用像“[\s\S]”的模式
*/


// let txt = document.getElementById('txt');

// txt.oninput = function () {
//     s.innerHTML=this.value.length+'字';
//     if(/^[1-9A-Za-z]\w{3,17}@[1-9A-Za-z]{2,8}\.(com|cn|net)$/g.test(this.value.trim())){
//         this.className='ok';
//     }else{
//         this.className='error';
//     }
//     if(!this.value.length){
//         this.className='';
//     }
// }


/*
    JSON数据格式（只支持高版本浏览器，低版本使用json.js）
    '{"name":"柔丝"}'||'[1,2,3,4]'

    JASON.parse(json)
    把JSON格式转成对象

        注意：
        JSON格式必须为标准的JSON格式
        key值""的字符串
        value值如果是字符串的话也应该是""包着

        JSON.stringify()
            对象转成JSON   
            注意：undefined和undefined是转不出来的

        eval
            能够吧字符尽量转成js代码并执行
            注意：
            容易注入病毒，尽量少用（但是人人都在用）
        
*/

    // let json='{"name":"rose"}';

    // console.log(JSON.parse(json));

    // let obj={name:'rose',n:null,n:undefined,fn:function (){}};

    // console.log(JSON.stringify(obj));


    // let json="{'name':'rose'}";

    // console.log(eval('('+json+')'));


    /*
        


    */