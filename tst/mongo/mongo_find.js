// 客户端
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.15.44.229:6603/";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('inner');
    mongo_find(db, dbo);
});

var mongo_find = function(db, dbo){
    // var criName = {name: '菜鸟工具'};
    // 按 type 字段升序   { type: 1 }
    // 按 type 字段降序   { type: -1}
    var mysort = { type: -1 };
    /*** 也支持左右连接 */
    dbo.collection('site').find().skip(1).limit(2).sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
};

module.exports = mongo_find;
