'use strict';

var modExpress = require('express');
var modApp = modExpress();
var modErrorhandler = require('errorhandler');
var modInitApp = require('./library/initApp.library.js');
var modFs = require("fs");

//init app
modApp.ext = modInitApp.init(modApp, modExpress, modErrorhandler);

//load global filter
require(modInitApp.data.path.filter.root + "global.filter.js").url(modApp);

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