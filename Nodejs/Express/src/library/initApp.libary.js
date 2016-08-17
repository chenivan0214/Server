'use strict';

var modPath = require('path');
var rootPath = modPath.join(__dirname, '../../');
var data = {
        server: {
            port: 3030
        },
        path:  {
            view: {
                root: rootPath + "src/view/",
                layout: rootPath + "src/view/layout/",
                partial: rootPath + "src/view/partial/"
            },
            libary: rootPath + "src/library/",
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

exports.init = function(app, express) {
    var objHandlebars = require('express-handlebars')
        .create({
            layoutsDir: data.path.view.layout,
            partialsDir: data.path.view.partial,
            defaultLayout: data.view.layout.default
        });

    app.set('views', data.path.view.root);
    app.set('view engine', 'handlebars');
    app.engine('handlebars', objHandlebars.engine);
    app.set('port', data.server.port);
    app.use(express.static(data.path.public));
    app.use(require('body-parser')());
};

exports.listen = function(app) {
    app.listen(app.get('port'), function() {
        console.log( 'Express started on http://localhost:' + data.server.port + '; press Ctrl-C to terminate.');
    });
};