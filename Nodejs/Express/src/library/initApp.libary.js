var modPath = require('path');
var rootPath = modPath.join(__dirname, '../../');
var data = {
        server: {
            port: 3030
        },
        path:  {
            view: {
                root: rootPath + "src/view/",
                layout: rootPath + "src/view/layout/"
            },
            route: {
                general: rootPath + "src/route/general/",
                other: rootPath + "src/route/other/"
            },
            libary: rootPath + "src/library/",
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
            defaultLayout: data.view.layout.default
        });

    app.set('views', data.path.view.root);
    app.set('view engine', 'handlebars');
    app.engine('handlebars', objHandlebars.engine);
    app.set('port', data.server.port);
    app.use(express.static(data.path.public));
};

exports.listen = function(app) {
    app.listen(app.get('port'), function() {
        console.log( 'Express started on http://localhost:' + data.server.port + '; press Ctrl-C to terminate.');
    });
};