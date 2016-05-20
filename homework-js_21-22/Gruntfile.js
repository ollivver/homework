/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
      babel: {
        options: {
            sourceMap: false,
            presets: ['es2015'],
        },
        dist: {
          files: [ {
            expand: true,
            cwd: 'src',
            src: ['*.js'],
            dest: 'dist',
            ext: '.js',
            extDot: 'first',
          }]
        }
      },
    watch: {
      babel: {
        files: ['src/*.js'],
        tasks: ['babel'],
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['babel']);

};
