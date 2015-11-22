var gulp = require('gulp'), 
    concat = require('gulp-concat'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    del = require('del'); // rm -rf

gulp.task('clean', function () {
  return del(['build']);
});

gulp.task('scripts', function () {
   return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

gulp.task('libs', function () {
  return gulp.src(['bower_components/**/*.min.js', ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('build/'));
});
  
gulp.task('styles', function () {
   return gulp.src(['less/*.less'])
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['clean', 'scripts', 'libs', 'styles'], function () {
  console.log('done!');
});



    
