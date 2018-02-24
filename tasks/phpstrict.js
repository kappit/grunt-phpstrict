/*
 * grunt-phpstrict
 * https://github.com/kappit/grunt-phpstrict
 *
 * Copyright (c) 2018 Kasper Hansen
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var fs = require('fs');

function checkParameterTypes(filePath, funcs) {
 async.forEach(funcs, function(func, next) {
  var funcFilterDots = func.replace(/\./g, '');

  funcFilterDots.replace(/\((.*?)\)/g, function(match0, match1) {
   if (match1 !== '') {
    var parameters = match1.split(',');

    for (var i in parameters) {
     var parameter = parameters[i];
     var parameterComponents = parameter.split('$');
     var parameterComponentsFilter = parameterComponents.filter(function(e) {
      return e;
     });
     var parameterComponentsLength = parameterComponentsFilter.length;

     if (parameterComponentsLength === 1) {
      var funcName = func.split('(');

      console.log("!!! Parameter type is missing for function '" + funcName[0] + "'  in file: '" + filePath + "'");
      process.exit(code=6);
     }
    }
   }

  });
 }, function(err) {
  throw err;
 });
}

function checkReturnTypes(filePath, funcs) {
 async.forEach(funcs, function(func, next) {
  var funcArray = func.split(':');
  var possibleReturnType = funcArray.pop();
  var possibleReturnTypeLastChar = possibleReturnType.slice(-1);

  if (possibleReturnTypeLastChar === ')') {
   var funcName = func.split('(');

   console.log("!!! Return type is missing for function '" + funcName[0] + "' in file: '" + filePath + "'");
   process.exit(code=6);
  }
 }, function(err) {
  throw err;
 });
}

function getFunctions(filePath) {
 fs.readFile(filePath, 'utf8', (err, data) => {
  var dataFilterAllWhiteSpace = data.replace(/\s/g, '');
  var matches = [];

  dataFilterAllWhiteSpace.replace(/function(.*?){/g, function(match0, match1) {
   var funcArray = match1.split('(');
   
   if(funcArray[0] !== '__construct' && funcArray[0] !== '__destruct'){
    matches.push(match1);
   }
  });

  checkParameterTypes(filePath, matches);
  checkReturnTypes(filePath, matches);
 });
}

function iterate(filePaths, callback) {
 async.forEach(filePaths, function(filePath, next) {
  getFunctions(filePath);
 }, function(err) {
  callback(err);
 });
}

module.exports = function(grunt) {
 grunt.registerMultiTask('phpstrict', 'Strict PHP development', function() {
  iterate(this.filesSrc, this.async());
 });
};