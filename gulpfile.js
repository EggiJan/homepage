var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

var deLocals = require('./locals_de');
var enLocals = require('./locals_en')


gulp.task('default', ['templates_de', 'templates_en', 'compress', 'minify-css'], function() {
  return gulp.src('./tmp/*')
    .pipe(clean())
});

gulp.task('less', function() {
  return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./tmp'));
});

gulp.task('concat_js', function() {
  return gulp.src('./scripts/*.js')
    .pipe(concat('muellerjan.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('minify-css', ['less'], function() {
  return gulp.src('./tmp/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('muellerjan.min.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('compress', ['concat_js'], function() {
  return gulp.src('./tmp/muellerjan.js')
    .pipe(uglify())
    .pipe(rename('muellerjan.min.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', ['templates_de', 'templates_en' , 'minify-css', 'compress'], function() {
  return gulp.watch(['./less/*.less', './templates/*.jade', './locals_en.js', './locals_de.js'],['templates_de', 'templates_en' ,'minify-css','compress'])
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
