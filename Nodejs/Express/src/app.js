'use strict';

var objExpress = require('express');
var objApp = objExpress();
var objInitApp = require('./library/initApp.libary.js');

//init app
objInitApp.init(objApp, objExpress);

//general route
require("fs").readdirSync(objInitApp.data.path.route.general).forEach(function(file) {
    require(objInitApp.data.path.route.general + file).url(objApp);
});

//other route
require("fs").readdirSync(objInitApp.data.path.route.other).forEach(function(file) {
    require(objInitApp.data.path.route.other + file).url(objApp);
});

//listen app
objInitApp.listen(objApp);