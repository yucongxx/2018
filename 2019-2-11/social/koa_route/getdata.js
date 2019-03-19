const Sh = require('../model/shdata');
const Xy = require('../model/xydata');
// new Xy({
//     zw : '前端工程师111【校园招聘】',
//     gs : '北京智信创通信息技术有限公司',
//     xz : '股份制公司',
//     gz : '全职',
//     dd : '上海',
//     jy : '3年以上',
//     xl : '本科及以上',
//     rs : '3',
//     dy : '面议',
//     sj : [2013,07,12],
//     lx : '社会招聘',
//     info : [
//         {
//             t : '岗位要求：',
//             l : [
//                 '1.计算机或相关专业本科以上学历；',
//                 '2.从事软件测试工作3年及以上；',
//                 '3.具备良好的沟通能力和快速学习能力；',
//                 '4.精通测试策略和方法、测试用例设计；',
//                 '5.熟悉DB2、AIX等平台的基本操作；',
//                 '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
//             ]
//         }
//   ]
// }).save();
// new Sh({
//     zw : '前端工程师222【社会招聘】',
//     gs : '北京智信创通信息技术有限公司',
//     xz : '股份制公司',
//     gz : '全职',
//     dd : '上海',
//     jy : '3年以上',
//     xl : '本科及以上',
//     rs : '3',
//     dy : '面议',
//     sj : [2013,07,12],
//     lx : '社会招聘',
//     info : [
//         {
//             t : '岗位要求：',
//             l : [
//                 '1.计算机或相关专业本科以上学历；',
//                 '2.从事软件测试工作3年及以上；',
//                 '3.具备良好的沟通能力和快速学习能力；',
//                 '4.精通测试策略和方法、测试用例设计；',
//                 '5.熟悉DB2、AIX等平台的基本操作；',
//                 '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
//             ]
//         }
//   ]
// }).save();


new Sh({
    zw : '前端工程师22【社会招聘】',
    gs : '北京智信创通信息技术有限公司',
    xz : '股份制公司',
    gz : '全职',
    dd : '上海',
    jy : '3年以上',
    xl : '本科及以上',
    rs : '3',
    dy : '面议',
    sj : [2013,07,12],
    lx : '社会招聘',
    info : [
        {
            t : '岗位要求：',
            l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
            ]
        }
  ]
}).save();

//校园下去写照着社会的来
module.exports = async function(ctx){
    let req = ctx.request.query;
    console.log(req);
    switch (req.zp) {
        case 'sh':
            //社会
            let num = req.num || 1;
            let data = await Sh.find()
            .sort({"_id":1}) //通过id正序排序
            .skip((num-1)*4) //0-3  5-8
            .limit(4) //一次有多少条数据

            ctx.body = {
                code:0,
                data
            }

            console.log(data);
            break;
        case 'xy':
            //校园
            let num1 = req.num || 1;
            let data1 = await Xy.find()
            .sort({"_id":1}) //通过id正序排序
            .skip((num1-1)*4) //0-3  5-8
            .limit(4) //一次有多少条数据

            ctx.body = {
                code:0,
                data:data1
            }

            console.log(data1);
            break;
        default:
            break;
    }
}