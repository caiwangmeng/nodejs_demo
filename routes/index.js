var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('manager/list');
    // res.render('index', { userName: 'Express' });

    // res.sendFile(path.join(__dirname + '/views/index.html'));
    // res.send(index);
    // res.json({});

});

module.exports = router;
