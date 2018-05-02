
module.exports = {
    // 判断是否为空
    isEmpty : function (v) {
        if (v == undefined || v == null || v == ''){
            return true;
        }
        return false;
    }
};