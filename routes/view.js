/**
 * 页面跳转配置(所有)
 */

var express = require('express');
var router = express.Router();

router.get('/manager/list', function(req, res, next) {
    res.render('manager/list');
});

router.get('/manager/detail', function(req, res, next) {
    res.render('manager/detail');
});

module.exports = router;
