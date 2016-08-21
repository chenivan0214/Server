'use strict';

exports.url = function(app) {
    app.get('/login', function(req, res) {
        var modFile = require(app.data.path.library + "file.library.js"),
            settingFilePath = app.data.path.cache.root + "setting.txt",
            data = {
                admin: "",
                notLogin: app.ext._.isUndefined(req.session.account)
            };

        modFile.checkFileExist(app, settingFilePath, function(_result) {
            if (_result === true) {
                modFile.readFile(app, settingFilePath, function(_data) {
                    modFile.deleteFile(app, settingFilePath, function(_result) {});

                    if (_data !== false) {
                        data = JSON.parse(_data);
                        res.render('login', data);
                    }
                });
            } else {
                data.admin = "admin";
                modFile.writeFile(app, settingFilePath, JSON.stringify(data), function(_result) {
                    res.render('login', data);
                });
            }
        });
    });

    app.post('/login/process', function(req, res) {
        var data = {
            notLogin: false,
        };

        data = Object.assign(data, req.query, req.body);
        res.render('login', data);
    });
};