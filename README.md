# grunt-phpstrict

> Strict PHP development

## Description
This plugin helps you in the development process, when using PHP type hints. It warns you if parameter types or return types are missing and enforces you to employ a strict programming by linting your code. 

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
  }
});
```

## Release History
2018-02-24: v0.1.0: Initial release

2018-02-24: v0.1.2: Fix: does no longer require the __construct() AND __destruct() magic methods to have a return type

2018-02-25: v0.1.3: Addtion: produces a warning and exists grunt upon missing parameter type or return type

2018-02-28: v0.1.5: Bug fixes

2018-03-15: v0.1.6: Fix: now validates referenced parameters

2018-05-17: v0.1.7: Fix: now skips the 'use' keyword

2018-05-30: v0.1.8: Fix: does no longer require the __call() magic method to have a return type