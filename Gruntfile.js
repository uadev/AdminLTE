// Radius Gruntfile
module.exports = function (grunt) {

  'use strict';

  grunt.initConfig(require('config').grunt);

  // Load all grunt tasks

  // LESS Compiler
  grunt.loadNpmTasks('grunt-contrib-less');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Include Files Within HTML
  grunt.loadNpmTasks('grunt-includes');
  // Optimize images
  grunt.loadNpmTasks('grunt-image');
  // Validate JS code
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Delete not needed files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Lint CSS
  grunt.loadNpmTasks('grunt-contrib-csslint');
  // Lint Bootstrap
  grunt.loadNpmTasks('grunt-bootlint');

  // Linting task
  grunt.registerTask('lint', ['jshint', 'csslint', 'bootlint']);

  //Server task
  grunt.loadNpmTasks('grunt-contrib-connect');

  //Available tasks
  grunt.loadNpmTasks('grunt-available-tasks');


  // The default task (running "grunt" in console) is "watch"
  grunt.registerTask('default', ['availabletasks']);
  grunt.registerTask('start', ['connect:server', 'watch']);
};
