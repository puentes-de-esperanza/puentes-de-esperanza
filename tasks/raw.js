'use strict'

const gulp = require('gulp')

gulp.task('raw', () => {
  const paths = {
    src: [
      'src/*',
      'src/*.*',
      'src/assets/**/media/*.*',
      '!src/*.html'
    ],
    dest: 'dist'
  }

  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest))
})
