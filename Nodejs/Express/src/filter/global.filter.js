'use strict';

exports.url = function(app) {
    app.use(function(req, res, next) {
        console.log(req.url);
        next();
    });
};