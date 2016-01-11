'use strict';

var babel = require('babel-core');

module.exports = {
    process: function (src, filename) {
        if (filename.match(/node_modules\/(?!react-tools\/)/)) {
            return src;
        }
        var result = babel.transform(src, {
            filename: filename
        });

        return result.code;
    }
};