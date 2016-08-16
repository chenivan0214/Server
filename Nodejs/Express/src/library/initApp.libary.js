var objPath = require('path');
var rootPath = objPath.join(__dirname, '../../');
var data = {
        path:  {
            layout: rootPath + "src/view/layout/",
            view: rootPath + "src/view/",
            route: rootPath + "src/route/",
            libary: rootPath + "src/library/",
            public: rootPath + "public/"
        }
    };

exports.appData = data;