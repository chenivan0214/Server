'use strict';

exports.url = function(app) {
    app.get('/login', function(req, res) {
        var objTpl = { notLogin: app.ext._.isUndefined(req.session.account) };
        res.render('login/index', objTpl);
    });

    app.post('/login/process', function(req, res, next) {
        var objTpl = { notLogin: false };

        objTpl = Object.assign(objTpl, req.query, req.body);
        res.render('login/index', objTpl);
    });
};