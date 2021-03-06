'use strict'

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');
  
gulp.task("concatScripts", function() {
  gulp.src([  
      'js/fastclick.js',
      'js/foundatation.js',
      'js/foundation.equalizer.js',
      'js/foundation.reveal.js',
      ])
     .pipe(concat("app.js")) // which file will hold all concatenated files content
     .pipe(gulp.dest("js")); // folder that holds app.js file
});

gulp.task("minifyScripts", function() {
    gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest("js"));
});
