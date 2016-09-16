/// <binding AfterBuild='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copyVendorScripts', function () {
    gulp.src('./bower_components/angular/angular.min.js').pipe(gulp.dest('./scripts'));
});

gulp.task('default', ['copyVendorScripts']);