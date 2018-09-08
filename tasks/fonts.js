'use strict'

const gulp = require('gulp')

gulp.task('fonts', () => {
  const paths = {
    src: [
      'src/assets/web_modules/chrome/*.woff'
    ],
    dest: 'dist/assets'
  }

  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest))
})
