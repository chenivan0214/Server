'use strict';

exports.url = function(app) {
    app.get('/login', function(req, res) {
        var objTmp = { notLogin: app.ext._.isUndefined(req.session.account) };
        res.render('login/index', objTmp);
    });

    app.post('/login/process', function(req, res, next) {
        var objTmp = { notLogin: false };

        objTmp = Object.assign(objTmp, req.query, req.body);
        res.render('login/index', objTmp);
    });
};