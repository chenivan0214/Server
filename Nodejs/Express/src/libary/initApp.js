var objPath = require('path');
var rootPath = objPath.join(__dirname, '../../');
var data = {
        path:  {
            layout: rootPath + "src/view/layout/",
            view: rootPath + "src/view/",
            libary: rootPath + "src/libary/",
            public: rootPath + "public/"
        }
    };

exports.appData = data;