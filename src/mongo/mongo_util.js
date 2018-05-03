
var MongoClient = require('mongodb').MongoClient;
var env = require('../../config/env_config');
var url = env.environment.mongo_url;

module.exports = {
    // 新增  insertData 表单对象数据
    insert: function(dbName, collectionName, insertData){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            // 插入一条 insertOne
            dbo.collection(collectionName).insertOne(insertData, function(err, res) {
                if (err) throw err;
                console.log("插入的文档数量为: " + res.insertedCount);
            });
            db.close();
        });
    },

    // 删除 deleteStr 删除条件
    delete: function (dbName, collectionName, deleteStr) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).deleteOne(deleteStr, function(err, obj) {
                if (err) throw err;
                console.log("文档删除成功");
            });
            db.close();
        });
    },

    // 更新
    update: function (dbName, collectionName, dataNew, whereStr) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            var updateStr = {$set: dataNew};
            dbo.collection(collectionName).updateOne(whereStr, updateStr, function(err, res) {
                if (err) throw err;
                // 其余处理
            });
            db.close();
        });
    },

    // 查询单个对象   返回json数据哦
    findOne: function (dbName, collectionName, whereStr, res) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).find(whereStr).toArray(function (err, result) {
                if (err) throw err;
                var obj = result[0];
                db.close();
                res.json(obj);
            });
        });
    },

    // 查询所有，以BootStrapTable可解析格式返回
    findAllBootStrap: function (dbName, collectionName, cri, res) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).find(cri).toArray(function (err, result) {
                if (err) throw err;
                var obj = {};
                obj.total = result.length;
                obj.rows = result;
                db.close();
                res.json(obj);
            });
        });
    }
};