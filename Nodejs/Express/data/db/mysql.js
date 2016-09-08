'use strict';

var modMysql = require('mysql');

exports.select = function(app, sql, callback) {
    var objDefine = require(app.data.path.db.define + "mysql.define.js"),
        objDb = modMysql.createConnection(objDefine);

    objDb.connect();
    objDb.query(sql, function(err, result, field) {
        err && console.log(err);
        callback(result);
    });

    objDb.end();
}