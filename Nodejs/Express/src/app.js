'use strict';

var modExpress = require('express');
var modApp = modExpress();
var modInitApp = require('./library/initApp.libary.js');
var modFs = require("fs");

//init app
modInitApp.init(modApp, modExpress);

//load general route
modFs.readdirSync(modInitApp.data.path.route.general).forEach(function(file) {
    require(modInitApp.data.path.route.general + file).url(modApp);
});

//load other route
modFs.readdirSync(modInitApp.data.path.route.other).forEach(function(file) {
    require(modInitApp.data.path.route.other + file).url(modApp);
});

//listen app
modInitApp.listen(modApp);