'use strict';

module.exports = function(rootPath) {
    var data = {};

    data.env =  "development";

    data.lang = "UTF-8";

    data.server = {
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
    };

    data.view = {
        layout: {
            default: "main"
        }
    };

    data.path = {
        data: rootPath + "data/",
        db: {
            root: rootPath + "data/db/",
            define: rootPath + "data/db/define/"
        },
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
            root: rootPath + "src/filter/"
        },
        cache: {
            root: rootPath + "cache/"
        },
        public: rootPath + "public/"
    };

    return data;
};