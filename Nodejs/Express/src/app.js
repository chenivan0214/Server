var path = require('path');
var handlebars = require('express-handlebars')
    .create({
        layoutsDir: path.join(__dirname, 'views/layout'),
        defaultLayout: "main"
    });
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '../public/')));

app.get('/', function(req, res) {
    res.render('index');
});

app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});