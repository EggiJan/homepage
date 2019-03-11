var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var filter = require('gulp-filter');
var sequence = require('gulp-sequence');
var fs = require('fs');

var deLocals = require('./locals_de');
var enLocals = require('./locals_en')

gulp.task('default', sequence('clean', 'copy', 'templates_de', 'templates_en', 'compress', 'minify-css', 'replace'))

gulp.task('clean', function() {
  return gulp.src(['dist/*', 'tmp/*'], { read: false })
    .pipe(clean())
})

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
  var filename = 'muellerjan.min.' + Date.now() + '.css';
  return gulp.src('./tmp/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(filename))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('compress', ['concat_js'], function() {
  var filename = 'muellerjan.min.' + Date.now() + '.js';
  return gulp.src('./tmp/muellerjan.js')
    .pipe(uglify())
    .pipe(rename(filename))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('replace', function () {
  var cssFiles = fs.readdirSync('dist/css');
  var jsFiles = fs.readdirSync('dist/js');

  var deFilter = filter('**/*_de.html', { restore: true });
  var enFilter = filter('**/*_en.html', { restore: true });
  

  return gulp.src(['tmp/index_de.html', 'tmp/index_en.html'])
    .pipe(replace('$${cssFilename}', cssFiles[0]))
    .pipe(replace('$${jsFilename}', jsFiles[0]))
    .pipe(deFilter)
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist/de'))
    .pipe(deFilter.restore)
    .pipe(enFilter)
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist/en'))
})

gulp.task('copy', function() {
  return gulp.src('public/**/*', { dot: true })
    .pipe(gulp.dest('dist/'))
})



gulp.task('templates_de', function() {
  gulp.src('./templates/index.jade')
    .pipe(jade({
      locals: deLocals
    }))
    .pipe(rename('index_de.html'))
    .pipe(gulp.dest('./tmp/'))
});

gulp.task('templates_en', function() {
  gulp.src('./templates/index.jade')
    .pipe(jade({
      locals: enLocals
    }))
    .pipe(rename('index_en.html'))
    .pipe(gulp.dest('./tmp/'))
});