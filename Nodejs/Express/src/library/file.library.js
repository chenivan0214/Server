'use strict';

var modFs = require('fs');

exports.checkFileExist = function(app, filePath, callback) {
    var result = false;

    try {
        result = modFs.statSync(filePath).size > 0 ? true : false;
        callback(result);
    } catch (e) {
        console.log(filePath + "is not exist");
        callback(result);
    }
};

exports.writeFile = function(app, filePath, content, callback) {
    var result = false;

    try {
        modFs.writeFile(filePath, content, function (err) {
            if (app.ext._.isNull(err)) {
                result = true;
            }

            callback(result);
        });
    } catch (e) {
        console.log(filePath + "can't write");
        callback(result);
    }
};

exports.readFile = function(app, filePath, callback) {
    var result = false;

    try {
        modFs.readFile(filePath, app.data.lang, function (err, data) {
            if (app.ext._.isNull(err)) {
                result = data;
            }

            callback(result);
        });
    } catch (e) {
        console.log(filePath + "can't read");
        callback(result);
    }
};

exports.deleteFile = function(app, filePath, callback) {
    var result = false;

    try {
        modFs.unlink(filePath, function (err) {
            if (app.ext._.isNull(err)) {
                result = true;
            }

            callback(result);
        });
    } catch (e) {
        console.log(filePath + "can't delete");
        callback(result);
    }
};