exports.url = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {title: "test"});
    });
};