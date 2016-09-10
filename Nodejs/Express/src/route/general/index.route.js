'use strict';

exports.url = function(app) {
    app.get('/', function(req, res) {
        //log
        var modLogger = require('logops');
        modLogger.info("[/][into]");

        if (req.session.account === undefined) {
            modLogger.info("[/][account is undefined]");
            res.redirect('/login');
            return;
        }

        var objTpl = {
            top: {
                title: "top"
            },
            title: "test"
        };
        res.render('index/index', objTpl);
    });
};