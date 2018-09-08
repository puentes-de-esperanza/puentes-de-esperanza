'use strict'

var gulp = require('gulp')

gulp.task('scripts', function () {
  var args = require('yargs').argv
  var gulpIf = require('gulp-if')
  var concat = require('gulp-concat')
  var sourcemaps = require('gulp-sourcemaps')
  var uglify = require('gulp-uglify')

  var paths = {
    src: 'src/assets/web_modules/**/*.js',
    dest: 'dist/assets/'
  }

  var isProduction = args.type === 'production'

  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(gulpIf(isProduction, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest))
})
