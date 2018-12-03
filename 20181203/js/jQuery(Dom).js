/*

*/



let num = 0;
$('#btn').click(function () {
    num++;
    let $li = $('<li><span>' + num + '</span><input n=' + num + ' style="display:none" value="' + num + '"type="text"><a rm href="javascript:;">删除</a><a rn href="javascript:;">修改</a></li>');
    $li.on('click', 'a[rm]', function () {
        console.log($(this));
        $li.remove();
    });

    let $txt = $li.find('input');//find 类似于getElementsByTagName
    let $span = $li.find('span');
    $li.on('click', 'a[rn]', function () {
        $txt.show();//show:display:block   hide:display:none
        $span.hide();
        $txt.focus();
        $txt[0].selectionStart = $txt.val().length;
    });

    $txt.blur(function (){
        //失去焦点的时候，判断如果没有内容
        if(!$(this).val()){
            //就把当前内容设置为一开始的n值
            $(this).val($(this).attr('n'));//attr()获取属性，传一个参数（字符串）是获取，传两个参数是设置
        }else{
            //有内容，就设置内容，并且把n这个属性也改了，为了下次用
            $span.html($(this).val());
            $(this).attr('n',$(this).val());
        }
        $span.show();
        $(this).hide();
        console.log(this);
    });

    $('ul').append($li);
});