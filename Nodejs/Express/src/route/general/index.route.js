'use strict';

exports.url = function(app) {
    app.get('/', function(req, res) {
        var data = {
            top: {
                title: "top"
            },
            title: "test"
        };
        res.render('index', data);
    });
};