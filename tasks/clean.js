'use strict'

const gulp = require('gulp')

gulp.task('clean', () => {
  const del = require('del')

  const paths = {
    dist: ['dist']
  }

  return del(paths.dist)
})
