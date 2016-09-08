'use strict';

exports.url = function(app) {
    app.get('/login', function(req, res) {
        var tmpData = { notLogin: app.ext._.isUndefined(req.session.account) };
        res.render('login/index', tmpData);
    });

    app.post('/login/process', function(req, res, next) {
        var tmpData = { notLogin: false };

        tmpData = Object.assign(tmpData, req.query, req.body);
        res.render('login/index', tmpData);
    });
};