// mongo 客户端
var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.15.44.229:6603/";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('inner');

    var deleteQue = {'name' : '菜鸟教程'};
    dbo.collection('site').deleteOne(deleteQue, function (err, res) {
        if (err) throw err;
        console.log("删除成功");
        db.close();
    });

    /*** 删除集合 */
    // dbo.collection("test").drop(function(err, delOK) {});

});