'use strict'

const gulp = require('gulp')

gulp.task('html', () => {
  const args = require('yargs').argv
  const gulpIf = require('gulp-if')
  const minifyHTML = require('gulp-minify-html')
  const nunjucksRender = require('gulp-nunjucks-render')
  const typogr = require('gulp-typogr')

  const isProduction = args.type === 'production'

  const paths = {
    src: 'src/*.html',
    dest: 'dist'
  }

  return gulp.src(paths.src)
    .pipe(nunjucksRender({
      path: 'src/templates'
    }))
    .pipe(typogr({
      only: ['widont', 'smartypants']
    }))
    .pipe(gulpIf(isProduction, minifyHTML({
      comments: true,
      quotes: true
    })))
    .pipe(gulp.dest(paths.dest))
})
