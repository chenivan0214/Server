'use strict';

var modPath = require('path');
var rootPath = modPath.join(__dirname, '../../');
var data = {
        env: "development",
        server: {
            development: {
                port: 3030,
                staticMaxAge: 1,
                cookieMaxAge: 6000,
                log: "expressLogging"
            },
            production: {
                port: 80,
                staticMaxAge: 60 * 60 * 24,
                cookieMaxAge: 6000
            }
        },
        path:  {
            view: {
                root: rootPath + "src/view/",
                layout: rootPath + "src/view/layout/",
                partial: rootPath + "src/view/partial/"
            },
            library: rootPath + "src/library/",
            route: {
                root: rootPath + "src/route/",
                general: rootPath + "src/route/general/",
                other: rootPath + "src/route/other/"
            },
            filter: {
                root: rootPath + "src/filter/",
            },
            public: rootPath + "public/"
        },
        view: {
            layout: {
                default: "main"
            }
        }
    };

exports.data = data;

exports.init = function(app, express, errorhandler) {
    var objHandlebars = require('express-handlebars')
        .create({
            layoutsDir: data.path.view.layout,
            partialsDir: data.path.view.partial,
            defaultLayout: data.view.layout.default
        });
    var modLog = require(data.path.library + "log.library.js");

    app.set('views', data.path.view.root);
    app.set('view engine', 'handlebars');
    app.engine('handlebars', objHandlebars.engine);

    if (data.env === "development") {
        app.set('port', data.server.development.port);
        app.use(express.static(data.path.public, {maxAge: data.server.development.staticMaxAge}));
        app.use(require('express-session')({
            secret: 'abcdefg',
            cookie: {
                secure: false,
                maxAge: data.server.development.cookieMaxAge
            }}));
        app.use(errorhandler());
        modLog.expressLogging(app);
    } else {
        app.set('port', data.server.production.port);
        app.use(express.static(data.path.public));
        app.use(require('express-session')({
            secret: 'abcdefg',
            cookie: {
                secure: false,
                maxAge: data.server.production.cookieMaxAge
            }}));
    }

    //enable parse for post
    app.use(require('body-parser')());

    //integate other module
    var objExtension = {};

    objExtension._ = require('lodash');

    app.ext = objExtension;
};

exports.listen = function(app) {
    app.listen(app.get('port'), function() {
        console.log( 'Express started on http://localhost:' + data.server.port + '; press Ctrl-C to terminate.');
    });
};