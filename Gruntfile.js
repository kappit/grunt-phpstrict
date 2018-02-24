/*
 * grunt-phpstrict
 * https://github.com/kappit/grunt-phpstrict
 *
 * Copyright (c) 2018 Kasper Hansen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({

  // Configuration to be run.
  phpstrict: {
   files: 'src/**/*.php'
  }

 });

 grunt.loadTasks('tasks');
 grunt.registerTask('default', ['phpstrict']);

};