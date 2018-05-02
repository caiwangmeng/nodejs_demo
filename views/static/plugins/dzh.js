/* 引入基础控件 */
document.write("<script language=javascript src='/static/plugins/layer/layer.js'></script>");

/* 引入BootStrap相关组件  */
document.write("<link href=\"/static/plugins/bootstrap/bootstrap.css\" rel=\"stylesheet\"/>");
document.write("<link href=\"/static/plugins/bootstrap/bootstrap-table.css\" rel=\"stylesheet\"/>");
document.write("<script src=\"/static/plugins/bootstrap/jquery-2.1.4.min.js\"></script>");
document.write("<script src=\"/static/plugins/bootstrap/bootstrap.js\"></script>");
document.write("<script src=\"/static/plugins/bootstrap/bootstrap-table.js\"></script>");


var basePath;

// $(function(){
//     // 初始化根目录
//     basePath = getBasePath();
// });

/*** 获取根目录 */
function getBasePath() {
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return (localhostPaht + projectName);
}

function getUrlParams() {
    var url = location.search; //获取url中"?"符后的字串
    var urlParams = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            urlParams[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    debugger;
    return urlParams;
}

function getUrlFirstParam() {
    var url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        return strs[0].split("=")[1];
    }
}

function getXHR(){
    var xhr=null;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    } else if (window.ActiveXObject){
        try{
            xhr=new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                xhr=new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您的浏览器暂不支持Ajax");
            }
        }
    }
    return xhr;
}

function ajaxPost(url, data, msg) {
    $.ajax({
        url: url,
        data: data,
        type: "POST",
        dataType : "json",
        success:function (res) {
            layer.msg(msg);
            setTimeout( function(){
                location.reload();
            }, 1000*1.5);  // 延迟多少毫秒
        }
    });
}

function isEmpty(v) {
    if (v == undefined || v == null || v == ''){
        return true;
    }
    return false;
}

function refresh(url) {
    $("#table").bootstrapTable('refresh', {url : url});
}