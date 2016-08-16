'use strict';

var objInitApp = require('./library/initApp.libary.js');
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

//general route
require("fs").readdirSync(objInitApp.appData.path.route.general).forEach(function(file) {
    require(objInitApp.appData.path.route.general + file).url(objApp);
});

//other route
require("fs").readdirSync(objInitApp.appData.path.route.other).forEach(function(file) {
    require(objInitApp.appData.path.route.other + file).url(objApp);
});

objApp.listen(objApp.get('port'), function() {
    console.log( 'Express started on http://localhost:' + objApp.get('port') + '; press Ctrl-C to terminate.');
});