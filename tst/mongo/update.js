// 客户端
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.15.44.229:6603/";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('inner');
    var criName = {name: '菜鸟教程'};
    var updateStr = {$set: { "url" : "https://www.runoob.com256546656" }};

    /*** updateMany 更新多条*/
    dbo.collection('site').updateOne(criName, updateStr, function (err, res) {
        if (err) throw err;
        console.log('更新成功');
        db.close();
    })
});