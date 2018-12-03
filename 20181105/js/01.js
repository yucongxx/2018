// let str = '你个大傻逼，超级牛逼无语了,十三点揍你个大蠢驴';

// let s = str.replace(/傻逼|牛逼|蠢驴|十三点/g, function ($0) {
//     console.log($0);
//     let temp = '';
//     for (let i = 0; i < $0.length; i++) {
//         temp += '*';
//     }
//     return temp;
// }

// );
// console.log(s);


//找到下列字符串中的数字，并且存到数组中 //[7,6,8,0,9,3,2,9]
// let str = 'sd7d6ankdsj8c sa093i29x8';
// str=str.match(/\d+/g);
// console.log(str);


// let str = 'hjkAdash';
// console.log(/\d/.test(str));//查看字符串中有没有数字
// console.log(/a/.test(str));//查看字符串中是否有a
// console.log(/a/i.test(str));//查看字符串中是否有a，不管大小写


//string.match(''||//)//把找到的字符串（能找一堆）放到数组中，找不到就返回null


/*
    正则的特性：
    懒惰：
    让他找一个他绝对不会找第二个，找到立马返回
        如： /a/只找一个a

    贪婪：
    让他找多个，他会无限的找到（有多少个找多少个）
        如：/\d+/找一个或者无限个数字

    修饰符
    g 找全局

    量词
    + 最少一个，最多不限


*/

// let str="adsafafaij45456f4564f125awqwea1456a456as4d6a";

// console.log(str.match(/a/ig));

// console.log(str.match(/\d+/g));


/*
    replace  替换

        string.replace(''||正则，''||callback);
        把第一个参数中的字符串替换成第二个参数中的字符串或return值


        |或者

        callback

            每一次匹配就会回调这个函数
            第一个参数：（一般会给$0)
                本次正则匹配的字符串
            第二个参数：
                本次正则匹配字符串的索引
            第三个参数
                整个字符串
            第四个参数
                undefined
*/


// let str = '周琦发展联盟赛季首秀登场31分钟 12分16板还送出3次盖帽';

// let newStr = str.replace(/周琦|首秀登场|盖帽/g, function ($0) {
//     let temp = '';
//     for (let i = 0; i < $0.length; i++) {
//         temp+='*';
//     }
//     return temp;
// })

// console.log(newStr);


//河蟹聊天
const ipt = document.getElementById('ipt');
const btn = document.getElementById('btn');
const ul = document.getElementById('ul');

let arr = ['cao', '艹', '靠', '妹'];
let arr2 = ['$', '#', '*'];
let re = new RegExp(arr.join('|'), 'g');
console.log(re);

btn.onclick = function () {
    let v = ipt.value;
    if (!v) {
        alert('请输入内容');
        return;
    }
    console.log(v);
    let a = v.replace(re, ($0) => {
        let temp = '';
        for (let i = 0; i < $0.length; i++) {
            temp += arr2.sort(()=>Math.random()- .5)[0];
        }
        return temp;
    });
    console.log(a);
    const li = document.createElement('li');
    li.innerHTML = a;
    ul.appendChild(li);
    ipt.value='';
}


/*格式化日期（分组）
    \d+一个数字
    \D+多个非数字

    分组（子项）
        用小括号表示分组
        可以提权：（1+1）*5
        从左往右来数，有几个（）就有几个分组
        在replace中，有几个分组，$0后面的参数就是这几个分组的值
        当分组和形参对应完后，又是index，input，undefined

        注意：
        在分组中，如果分组的后面直接加了量词，那么结果为量词的终点位置

        如:
        /((\d)+)\D+(\d+)\D+(\d+)/

        $1是2018
        $2是8

        量词：
        ?可以没有，最多就一个



*/
// let str = '2018.--/11---..5日';
// // str.replace(/(\d+)\D+(\d+)\D+(\d+)\D?/g,($0,$1,$2,$3)=>{
// //      console.log($1);
// // });

// let obj=(function (){
//     function initDate(str){
//         return str.replace(/(\d+)\D+(\d+)\D+(\d+)\D?/ig,($0,$1,$2,$3)=>{
//             return $1+'年'+$2+'月'+$3+'日';
//         });
//     }
//     return {
//         initDate
//     }
// })();

// console.log(obj.initDate(str));


//拓展时间字符串格式化（万能版）
// String.prototype.myFormatTime=function myFormatTime(template='{0}年{1}月{2}日 {3}时{4}分{5}秒'){
//     let ary=this.match(/\d+/g).map(item=>(item<10?'0'+item:item));   
//     return template.replace(/\{(\d)\}/g,(...[, index])=>ary[index] || '00');

// }

// let str='2018/11/6 20:25';
// console.log(str.myFormatTime());

//[]范围
/*
    []中只代表一个
    数字：0-9
    字母：a-z    97-122
    大写字母：A-Z  65-90
    大写小写的范围：[A-Za-z]

    18-110范围
    18-19  1[89]
    20-99  [2-9][0-9]
    100-109  10[0-9]
    110

    ^:开头
    $:结尾
*/

// let str = 'a1ca2ca3ca4ca5ca6ca7caAcaZcabcahcazca_c';

// console.log(str.match(/a[1-6]c/g));

// console.log(/(^1[89]$)|(^[2-9][0-9]$)|(^10[0-9]$)(^110$)/.test('1000'));

//发么
/*
    计算下列字符串中的字节大小，假设英文为1个字节，中文为2个字节

    [\u4e00-\u9fa5]中文区间范围

*/
//范围题目

// let str = 'hello!今天天气不错!';//19
// let num=0;
// for(let i=0;i<str.length;i++){
//     if(/[\u4e00-\u9fa5]/.test(str[i])){
//         num+=2;
//     }else{
//         num++;
//     }
// }
// console.log(num);


//量词的范围
/*
    {}量词的范围
    {n,m}
        {0,1} == ? 最小没有最大1个
        {1,} == +  最小1个最多不限
        {1,3}  最少1个，最多3个
        {0,} *  最少没有，最多无限
        {9}   最多最小都是9个
*/

// let str = 'a1ca22ca333ca444444ca5555555555c';
// console.log(str.match(/a\d{1,3}c/g));

//验证是否为qq号
/*
    1.开头必须为数字
    2.开头不能为0
    3.5-11位

    /^[1-9]\d{4-10}$/
*/


// let txt = document.getElementById('ipt');
// let btn = document.getElementById('btn');

// btn.onclick = function () {
//     if(/^[1-9]\d{4,10}$/g.test(txt.value.trim())){
//         alert('输入的是qq号');
//     }else{
//         alert('输入的不是qq号');
//     }
// }

/*
    开头是1
    第二位是345789
    11位

    /^1[345789]\d{9}$/

*/

// let btn = document.getElementById('btn');
// let txt = document.getElementById('txt');

// btn.onclick = function () {
//     if (/^1[345789]\d{9}$/.test(txt.value.trim())) {
//         alert('输入的是手机号');
//     } else {
//         alert('输入的不是手机号');
//     }
// }


//别的元字符

/*
   \n 换行符
   \d 一个数字
   \D 一个非数字
   \s 一个空格
   \S 一个非空格
   \w 一个数字，字母，下划线
   \W 一个非数字，字母，下划线
   \b 一个边界符
   \B 一个非边界符


*/

// let str = '   ds  ad  sads   ';

// console.log(str.replace(/^\s+|\s+$/g,''));

// 6~18个字符，可使用字母、数字、下划线，需以字母开头

// btn.onclick=function (){
//     if(/^[A-Za-z]\w{5,17}$/.test(txt.value.trim())){
//         alert('注册成功');
//     }else{
//         alert('请重新输入');
//     }
// }

