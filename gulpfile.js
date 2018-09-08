'use strict'

const gulp = require('gulp')

// load specific tasks
require('require-dir')('tasks')

// create browsersync server
require('browser-sync').create('pde')

// default task
gulp.task('default', [
  'fonts',
  'html',
  'raw',
  'scripts:libs',
  'scripts',
  'styles'
])

// lint task
gulp.task('lint', [
  'html:lint',
  'scripts:lint',
  'styles:lint'
])
