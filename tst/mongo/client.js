
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.15.44.229:6603/inner";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    db.close();
});