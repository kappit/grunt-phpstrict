/*
 * grunt-phpstrict
 * https://github.com/kappit/grunt-phpstrict
 *
 * Copyright (c) 2018 Kasper Hansen
 * Licensed under the MIT license.
 */
'use strict';

var fs = require('fs');

function checkParameterTypes(func, funcName, filePath) {
    var match, regEx = /\(([^)]+)\)/;

    while ((match = regEx.exec(func)) !== null) {
        var func = match[1].split(',');

        for (var i in func) {
            var parameter = func[i].split('$');
            var parametersFilter = parameter.filter(function(e) {
                if(e[0] === '&') {
                  return e.substring(1);
                }
                
                return e;
            });
            if (parametersFilter.length !== 2) {
                console.log("!!! Parameter type is missing for function '" + funcName + ' ' + func + "' in file: '" + filePath + "'");
                process.exit(code = 6);
            }
        }
    }
}

function checkReturnType(func, funcName, filePath) {
    var parts = func.split(':');

    if (parts[1] === undefined) {
        if (funcName.trim() !== '__construct' && funcName.trim() !== '__destruct') {
            console.log("!!! Return type is missing for function '" + funcName + ' ' + func + "' in file: '" + filePath + "'");
            process.exit(code = 6);
        }
    }
}

function processContent(content, filePath) {
    var match, regEx = /function(.*?){/g;
    var contentFilterNewLines = content.replace(/\r?\n|\r/g, '');

    while ((match = regEx.exec(contentFilterNewLines)) !== null) {
        var func = match[1].substring(match[1].indexOf('(')).replace(/\./g, '');;
        var funcName = match[1].split('(')[0].trim();

        checkParameterTypes(func.replace(/\s/g, ''), funcName, filePath);
        checkReturnType(func.replace(/\s/g, ''), funcName, filePath);
    }
}

function getContent(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function iterate(filePaths) {
    for (var i in filePaths) {
        var filePath = filePaths[i];
        var content = getContent(filePath);

        processContent(content, filePath);
    }
}

module.exports = function(grunt) {
    grunt.registerMultiTask('phpstrict', 'Strict PHP development', function() {
        iterate(this.filesSrc);
    });
};