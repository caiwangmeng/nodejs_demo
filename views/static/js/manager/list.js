//设置参数
function queryParams(params) {
    params.userName = $("#userName").val();
    params.sex = $("#sex").val();
    console.log(params);
    return params;
}

function getServiceData(res) {
    return res;
}

function queryData() {
    refresh("/mongo/findAll");
}

function clearTable() {
    $("#table").bootstrapTable("removeAll");
    refresh("/mongo/findAll");
}

// 菜单格式化
function sexFormat(v, row) {
    if ("female" == v){
        return "女";
    }
    if ("male" == v){
        return "男";
    }
    return "-";
}

// 菜单格式化
function nameFormatter(v, row, index) {
    var operate = "<a href='javascript:void(0)' class='managerDetail'>" + "详情" +"</a>" + "&nbsp;&nbsp;" +
    "<a href='javascript:void(0)' class='managerDelete'>" + "删除" +"</a><br/>";
    return operate;
}

// 绑定查询条件
window.inputEvents = {
    'click .managerDetail': function (e, value, row, index) {
        window.open("/view/manager/detail?mobile=" + row.mobile, "详情");
    },
    'click .managerDelete': function (e, value, row, index) {
        deleteObject(row.mobile);
    }
};

function deleteObject(mobile) {
    // 询问框
    // layer.confirm(
    //     '确定要删除吗？',
    //     {btn: ['确定','取消']},
    //     function(){
            var url = "/mongo/delete";
            var data  = {};
            data.mobile = mobile;
            ajaxPost(url, data, "删除成功");
        // }
    // );
}