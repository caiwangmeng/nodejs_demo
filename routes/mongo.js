var express = require('express');
var router = express.Router();

var string_util = require('../src/modules/utils/string_util');
var mongo_util = require('../src/mongo/mongo_util.js');

// mongo 相关参数
var INNER_DB = "inner";
var SITE = "site";

/**
 * 新增保存 post请求方式
 */
router.post('/save', function(req, res, next) {
    var body = req.body;
    mongo_util.insert(INNER_DB, SITE, body);
    res.json({result : "success"});
});

/**
 * 删除
 */
router.post('/delete', function(req, res, next) {
    var body = req.body;
    if (string_util.isEmpty(body.mobile)){
        res.json({result : "error", msg: "参数为空"});
        return;
    }
    mongo_util.delete(INNER_DB, SITE, body);
    res.json({result : "success"});
});

/**
 * 更新
 */
router.post('/update', function(req, res, next) {
    var body = req.body;
    // 更新主条件
    var whereStr = {};
    whereStr.mobile = body.mobile;
    mongo_util.update(INNER_DB, SITE, body, whereStr);
    res.json({result : "success"});
});

/**
 * 查找
 */
router.get('/find', function(req, res, next) {
    let whereStr = req.query;
    mongo_util.findOne(INNER_DB, SITE, whereStr, res);
});

/**
 * 查找全部
 */
router.get('/findAll', function(req, res, next) {
    // TODO 分页
    let query = req.query;
    let cri = {};
    if (!string_util.isEmpty(query.sex))
        cri.sex = query.sex;
    if (!string_util.isEmpty(query.userName))
        cri.userName = new RegExp(query.userName);
    mongo_util.findAllBootStrap(INNER_DB, SITE, cri, res)
});

module.exports = router;



// 说明：
// 解析请求体
// var body = '';
// req.on('data', function (chunk) {
//     body += chunk;   //读取请求体
// })
//
// req.on('end', function () {
//     console.log(body);
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.end('hello world');
//     console.log(qs.parse(body).userName);   //使用qs解析请求体
//     console.log(qs.parse(body).userPwd);
// });
