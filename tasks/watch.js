'use strict'

const gulp = require('gulp')

gulp.task('watch', ['default'], () => {
  const browserSync = require('browser-sync').get('pde')
  const reload = browserSync.reload

  const paths = {
    dist: 'dist',
    distHtml: 'dist/*.html',
    distScripts: 'dist/assets/*.js',
    srcHtml: 'src/**/*.html',
    srcStyles: 'src/assets/**/*.css',
    srcScripts: 'src/assets/web_modules/**/*.js',
    srcScriptsLint: [
      'gulpfile.js',
      'tasks/*.js',
      'src/assets/web_modules/**/*.js'
    ]
  }

  // start browser sync server
  browserSync.init({
    open: 'interal',
    server: {
      baseDir: paths.dist
    }
  })

  // watch src gulp tasks and trigger reload
  gulp.watch(paths.srcHtml, { interval: 500 }, [ 'html', reload ])
  gulp.watch(paths.srcScripts, { interval: 500 }, [ 'scripts:lint', 'scripts', reload ])
  gulp.watch(paths.srcStyles, { interval: 500 }, ['styles:lint', 'styles'])
})
