'use strict';

var modExpress = require('express');
var modApp = modExpress();
var modErrorhandler = require('errorhandler');
var modInitApp = require('./library/initApp.library.js');
var modFs = require("fs");

//init app
modInitApp.init(modApp, modExpress, modErrorhandler);

//load global filter
require(modApp.data.path.filter.root + "global.filter.js").url(modApp);

//load general route
modFs.readdirSync(modInitApp.data.path.route.general).forEach(function(file) {
    require(modApp.data.path.route.general + file).url(modApp);
});

//load other route
modFs.readdirSync(modApp.data.path.route.other).forEach(function(file) {
    require(modApp.data.path.route.other + file).url(modApp);
});

//listen app
modInitApp.listen(modApp);