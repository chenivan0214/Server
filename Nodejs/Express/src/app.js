var objInitApp = require('./libary/initApp.js');
var objHandlebars = require('express-handlebars')
    .create({
        layoutsDir: objInitApp.appData.path.layout,
        defaultLayout: "main"
    });
var objExpress = require('express');
var objApp = objExpress();

objApp.set('views', objInitApp.appData.path.view);
objApp.set('view engine', 'handlebars');
objApp.engine('handlebars', objHandlebars.engine);
objApp.set('port', 3030);
objApp.use(objExpress.static(objInitApp.appData.path.public));

objApp.get('/', function(req, res) {
    res.render('index', {title: "test"});
});

objApp.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

objApp.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

objApp.listen(objApp.get('port'), function() {
    console.log( 'Express started on http://localhost:' + objApp.get('port') + '; press Ctrl-C to terminate.');
});