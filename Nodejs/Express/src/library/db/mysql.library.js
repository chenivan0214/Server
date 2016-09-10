'use strict';

var modMysql = require('mysql');

exports.init = function(app) {
    var objDefine = require(app.data.path.db.root + "mysql.js"),
        objDb = modMysql.createConnection(objDefine);

    return objDb;
};