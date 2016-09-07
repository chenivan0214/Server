'use strict';

exports.url = function(app) {
    var modMysqlDb = require(app.data.path.db.root + "mysql.db.js");

    app.get('/login', function(req, res) {
        var data = {
                notLogin: app.ext._.isUndefined(req.session.account)
            };

        res.render('login/index', data);
    });

    app.post('/login/process', function(req, res, next) {
        var data = {
                notLogin: false,
            };

        data = Object.assign(data, req.query, req.body);
        res.render('login/index', data);
    });
};