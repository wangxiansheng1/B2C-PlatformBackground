
$(document).ready(function(){
//    按钮切换功能
    $('.common-bbtn').click(function(){
        if($(this).css('left') == "32px"){
            $(this).animate({
                left:'-3px'
            },400,function(){
                $(this).parents('.common-box').addClass('common-box-active');
                $(this).siblings('span').text("OFF");
                $(this).attr('data-value',0);
            });
            return false;
        }
        $(this).animate({
            left:'32px'
        },400,function(){
            $(this).attr('data-value',1);
            $(this).parents('.common-box').removeClass('common-box-active');
            $(this).siblings('span').text("NO");
        });

    });

    //时间开始结束
    var start = {
        elem: '#beginTime',
        format: 'YYYY-MM-DD HH:mm:ss',
        //max: '2099-06-16 23:59:59', //最大日期
        //festival: true, //显示节日
        istime: true,
        istoday: true,
    };
    var end = {
        elem: '#endTime',
        format: 'YYYY-MM-DD HH:mm:ss',
       // max: '2099-06-16 23:59:59',
        //festival: true, //显示节日
        istime: true,
        istoday: true,
    };

    var Cstart = {
        elem: '#CbeginTime',
        format: 'YYYY-MM-DD HH:mm:ss',
       // max: '2099-06-16 23:59:59', //最大日期
        //festival: true, //显示节日
        istime: true,
        istoday: true,
        choose: function(datas){
            Cend.min = datas; //开始日选好后，重置结束日的最小日期
            Cend.start = datas //将结束日的初始值设定为开始日
        }
    };
    var Cend = {
        elem: '#CendTime',
        format: 'YYYY-MM-DD HH:mm:ss',
       // max: '2099-06-16 23:59:59',
        //festival: true, //显示节日
        istime: true,
        istoday: true,
        choose: function(datas){
            Cstart.max = datas; //结束日选好后，重置开始日的最大日期
            Cend.start = datas //将结束日的初始值设定为开始日
        }
    };

    // laydate(start);
    // laydate(end);
    // laydate(Cstart);
    // laydate(Cend);
    if($("#beginTime")) {
        laydate(start);
    };
    if($("#endTime")) {
        laydate(end);
    };
    if($("#CbeginTime")) {
        laydate(Cstart);
    };
    if($("#CendTime")) {
        laydate(Cend);
    };
});

//页面弹窗提示
var Until = function popUp(message){
    var $el = $('<div class="modal fade" id="prompt" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"><div class="modal-body" style="text-align: center">' + message + '</div><div class="modal-footer"> <button type="button" class="btn btn-primary prompt-confirm">确认</button></div> </div> </div></div>');
    if ($('.dialog-cart').length > 0) {
        return false;
    };
    $(document.body).append($el);
    $('#prompt').modal({backdrop: 'static', keyboard: false});
    $("#prompt").modal('show');
};

//弹窗确认页面进行跳转
var prompt = function (url) {
    $("#prompt").on("click",function () {
        window.location.href = url;
    })
};
//弹窗确认模态框消失
var Disappger = function () {
    $("#prompt").on("click",function () {
        $("#prompt").modal('hide');
    })
};


$('.search').on('click',function () {
    alert(2);
    //时间判断
    var beginTime =  $("#beginTime").val();
    var endTime = $("#endTime").val();
 
    var start = (new Date(beginTime.replace(/-/g, "/"))).getTime();
    var end = (new Date(endTime.replace(/-/g, "/"))).getTime();
    if( start > end){
        Until("开始时间不能大于结束时间");
        Disappger();
        $("#beginTime").val("");
        $("#endTime").val("");
        return false;
    }

});


