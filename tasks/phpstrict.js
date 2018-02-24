/*
 * grunt-phpstrict
 * https://github.com/kappit/grunt-phpstrict
 *
 * Copyright (c) 2018 Kasper Hansen
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');

function iterate(filePaths, callback) {
  async.forEach(filePaths, function (filePath, next) {
    console.log(filePath);
  }, function(error){
    callback(error);
  });
}

module.exports = function(grunt) {
  grunt.registerMultiTask('phpstrict', 'Strict PHP development', function() {
    iterate(this.filesSrc, this.async());
  });
};
