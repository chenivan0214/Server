'use strict';

exports.url = function(app) {
    app.get('/login', function(req, res) {
        var data = {
                notLogin: app.ext._.isUndefined(req.session.account)
            };

        res.render('login', data);
    });

    app.post('/login/process', function(req, res, next) {
        var data = {
                notLogin: false,
            };

        var sql = "select * from `User` where `name` = '" + req.body.account + "';";

        app.ext.mysql.connect();
        app.ext.mysql.query(sql, function(err, result, field) {
            if (err) {
            }
            console.log(result);
        });

        data = Object.assign(data, req.query, req.body);
        res.render('login', data);
    });
};