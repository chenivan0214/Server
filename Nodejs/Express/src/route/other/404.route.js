'use strict';

exports.url = function(app) {
    app.use(function(req, res) {
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
    });
};