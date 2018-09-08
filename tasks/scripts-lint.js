'use strict'

const gulp = require('gulp')

gulp.task('scripts:lint', () => {
  const cached = require('gulp-cached')
  const standard = require('gulp-standard')

  const paths = {
    src: [
      'gulpfile.js',
      'tasks/*.js',
      'src/assets/web_modules/**/*.js'
    ]
  }

  return gulp.src(paths.src)
    .pipe(cached('scripts'))
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false
    }))
})
