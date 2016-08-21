'use strict';

exports.url = function(app) {
    app.get('/login', function(req, res) {
        var modFile = require(app.data.path.library + "file.library.js"),
            settingFilePath = app.data.path.cache.root + "setting.txt",
            data = {
                notLogin: app.ext._.isUndefined(req.session.account)
            };

        res.render('login', data);
    });

    app.post('/login/process', function(req, res) {
        var data = {
            notLogin: false,
        };

        data = Object.assign(data, req.query, req.body);
        res.render('login', data);
    });
};