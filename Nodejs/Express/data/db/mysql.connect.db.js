'use strict';

var modMysql = require('mysql');

module.exports = function(app) {
    var objDefine = require(app.data.path.db.define + "mysql.define.js"),
        objClient = modMysql.createConnection(objDefine);

    return objClient;
}