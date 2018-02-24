# grunt-phpstrict

> Strict PHP development

## Description
This plugin helps you in the development process, when using PHP type hints. It warns you if parameter types or return types are missing and enforces you to employ a strict programming. 

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phpstrict --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phpstrict');
```

## The "phpstrict" task

### Overview
In your project's Gruntfile, add a section named `phpstrict` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  phpstrict: {
    files: // Target a specific directory containing relevant .php files; fx: 'src/**/*.php'
  },
});
```

## Release History
_(Nothing yet)_
