
let dataInitParam;

//文档加载事件，整个文档加载完成后执行。就仅仅只需要加载所有的DOM结构，在浏览器把所有的HTML放入DOM tree之前就执行js效果。包括在加载外部图片和资源之前。
$(function(){
    dataInitParam = getUrlFirstParam();

    // 快捷键 "a".log
    console.log(dataInitParam);

    $.ajax({
        url: "/mongo/find?mobile=" + dataInitParam,
        type: "GET",
        success : function (data) {
            $("#userName").val(data.userName);
            $("#nickName").val(data.nickName);
            $("#age").val(data.age);
            $("#mobile").val(data.mobile);
            $("#sex").val(data.sex);
        },
        error : function (data) {
            console.log("dfas");
        }
    });
    if (isEmpty(dataInitParam)){
        $("#btnAdd").attr("style", "display:none;");
    }
});

function commit() {
    // 询问框
    layer.confirm(
        '确定要提交吗？',
        {btn: ['确定','取消']},
        function(){
    updateDetail();
    });
}

function updateDetail(){
    // 初始化内容
    let userName = $("#userName").val();
    let nickName = $("#nickName").val();
    let age = $("#age").val();
    let mobile = $("#mobile").val();
    let sex = $("#sex").val();

    let msg = "更新成功";
    let url = "/mongo/update";
    if (isEmpty(dataInitParam)){
        url = "/mongo/save";
        msg = "保存成功";
    }
    $.ajax({
        url: url,
        data: {
            "userName" : userName,
            "nickName" : nickName,
            "age" : age,
            "mobile" : mobile,
            "sex" : sex
        },
        type: "POST",
        dataType: "json",
        success: function (data) {
            layer.msg(msg);
        }
    });
}

function add() {
    window.open("/view/manager/detail", "管理详情");
}


