exports.url = function(app) {
    app.use(function(req, res) {
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
    });
};