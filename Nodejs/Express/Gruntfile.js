'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var config =  grunt.file.readYAML('config.yaml');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            dev:{
                options: {
                    script: "./src/app.js"
                }
            }
        },
        watch: {
            options: {
                livereload: config.watch.listenerPort
            },
            express: {
                files: ['./src/**/*'],
                tasks: ['express:dev', 'jshint'],
                options: {
                    spawn: false
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            build: ['src/app.js', 'src/library/**/*', 'src/route/**/*']
        }
    });

    grunt.registerTask('default', ['express:dev', 'watch']);
};