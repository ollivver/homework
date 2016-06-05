/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      js: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['js/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },
      css: {
        options: {
          separator: '\n\r'
        },
        src: ['css/*.css'],
        dest: 'dist/<%= pkg.name %>.css',
      },  
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['sass', 'concat']);

};
