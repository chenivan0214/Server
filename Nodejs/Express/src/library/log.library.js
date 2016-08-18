'use strict';

exports.expressLogging = function(app) {
    var modExpressLogging = require('express-logging'),
        modLogger = require('logops');

    //global log
    app.use(modExpressLogging(modLogger));
};