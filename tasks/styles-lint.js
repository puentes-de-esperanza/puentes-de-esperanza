'use strict'

const gulp = require('gulp')

gulp.task('styles:lint', () => {
  const cached = require('gulp-cached')
  const postcss = require('gulp-postcss')

  const paths = {
    src: 'src/assets/**/*.css'
  }

  const processors = [
    require('postcss-bem-linter')(),
    require('stylelint')(require('stylelint-config-suitcss')),
    require('postcss-reporter')({
      clearMessages: true
    })
  ]

  return gulp.src(paths.src)
    .pipe(cached('styles-lint'))
    .pipe(postcss(processors))
    .on('error', function (err) {
      console.log(err.message)
      this.emit('end')
    })
})
