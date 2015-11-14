var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var rename = require('gulp-rename');

var deLocals = require('./locals_de');
var enLocals = require('./locals_en')

var vHost = '/var/www/virtual/mueljn/muellerjan.de';

gulp.task('default', ['less', 'templates', 'templates_en'], function() {});

gulp.task('less', function() {
  return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['less', 'templates', 'templates_en'], function() {
  return gulp.watch(['./less/*.less', './templates/*.jade', './locals_en.js', 'locals_de.js'],['templates', 'templates_en' ,'less'])
})

gulp.task('templates', function() {
  gulp.src('./templates/index.jade')
    .pipe(jade({
      locals: deLocals
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('templates_en', function() {
  gulp.src('./templates/index.jade')
    .pipe(jade({
      locals: enLocals
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./public/en/'))
});
