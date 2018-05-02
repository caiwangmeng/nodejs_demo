/**
 *  多环境，多db配置
 */

var dev_environment = {
    mongo_url: 'mongodb://10.15.44.229:6603/',
    mysql_url: '',
    oracle_url: '',
};

// 对比的参数配置 测试比对用
var test_environment = {
    mongo_url: 'mongodb://10.15.44.229:6602/'
};

// 目前使用的环境
module.exports.environment = dev_environment;
// module.exports.environment = test_environment;