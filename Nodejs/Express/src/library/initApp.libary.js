var objPath = require('path');
var rootPath = objPath.join(__dirname, '../../');
var data = {
        path:  {
            layout: rootPath + "src/view/layout/",
            view: rootPath + "src/view/",
            route: {
                general: rootPath + "src/route/general/",
                other: rootPath + "src/route/other/"
            },
            libary: rootPath + "src/library/",
            public: rootPath + "public/"
        }
    };

exports.appData = data;