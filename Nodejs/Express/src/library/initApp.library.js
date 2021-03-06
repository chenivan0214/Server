'use strict';

var modPath = require('path');
var rootPath = modPath.join(__dirname, '../../');
var data = require('../../data/web.setting.data.js')(rootPath);

exports.data = data;

exports.init = function(app, express, errorhandler) {
    //integate with defulat data
    app.data = data;

    //set env
    var objHandlebars = require('express-handlebars')
        .create({
            layoutsDir: app.data.path.view.layout,
            partialsDir: app.data.path.view.partial,
            defaultLayout: app.data.view.layout.default
        });

    var modLog = require(app.data.path.library.root + "log.library.js");

    app.set('views', app.data.path.view.root);
    app.set('view engine', 'handlebars');
    app.engine('handlebars', objHandlebars.engine);

    if (data.env === "development") {
        app.set('port', app.data.server.development.port);
        app.use(express.static(data.path.public, {maxAge: app.data.server.development.staticMaxAge}));
        app.use(require('express-session')({
            secret: 'abcdefg',
            cookie: {
                secure: false,
                maxAge: app.data.server.development.cookieMaxAge
            }}));
        app.use(errorhandler());
        modLog.expressLogging(app);
    } else {
        app.set('port', app.data.server.production.port);
        app.use(express.static(app.data.path.public));
        app.use(require('express-session')({
            secret: 'abcdefg',
            cookie: {
                secure: false,
                maxAge: app.data.server.production.cookieMaxAge
            }}));
    }

    //enable parse for post
    app.use(require('body-parser')());

    //integate other module
    var objExtension = {};

    objExtension.mysql = require(app.data.path.library.db + "mysql.library.js");
    objExtension._ = require('lodash');

    app.ext = objExtension;
};

exports.listen = function(app) {
    app.listen(app.get('port'), function() {
        if (data.env === "development") {
            console.log( 'Express started on http://localhost:' + data.server.development.port + '; press Ctrl-C to terminate.');
        } else {
            console.log( 'Express started on http://localhost:' + data.server.production.port + '; press Ctrl-C to terminate.');
        }

    });
};