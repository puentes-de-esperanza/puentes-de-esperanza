'use strict'

const gulp = require('gulp')

gulp.task('html:lint', () => {
  const cached = require('gulp-cached')
  const htmlhint = require('gulp-htmlhint')

  const paths = {
    src: 'dist/*.html'
  }

  return gulp.src(paths.src)
    .pipe(cached('html'))
    .pipe(htmlhint({
      'attr-lowercase': false
    }))
    .on('error', function (err) {
      console.log(err.message)
      this.emit('end')
    })
    .pipe(htmlhint.reporter())
})
