var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var rename = require('gulp-rename');

var deLocals = require('./locals_de');
var enLocals = require('./locals_en')


gulp.task('default', ['less', 'templates_de', 'templates_en'], function() {});

gulp.task('less', function() {
  return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['less', 'templates_de', 'templates_en'], function() {
  return gulp.watch(['./less/*.less', './templates/*.jade', './locals_en.js', 'locals_de.js'],['templates_de', 'templates_en' ,'less'])
})

gulp.task('templates_de', function() {
  gulp.src('./templates/index.jade')
    .pipe(jade({
      locals: deLocals
    }))
    .pipe(gulp.dest('./public/de'))
});

gulp.task('templates_en', function() {
  gulp.src('./templates/index.jade')
    .pipe(jade({
      locals: enLocals
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./public/en/'))
});
