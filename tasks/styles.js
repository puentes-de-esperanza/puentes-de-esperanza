'use strict'

const gulp = require('gulp')

gulp.task('styles', () => {
  const args = require('yargs').argv
  const browserSync = require('browser-sync').get('pde')
  const cssnano = require('gulp-cssnano')
  const gulpIf = require('gulp-if')
  const postcss = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  const isProduction = args.type === 'production'

  const paths = {
    src: 'src/assets/index.css',
    dest: 'dist/assets/'
  }

  const processors = [
    require('postcss-import')(),
    require('postcss-custom-media')(),
    require('postcss-custom-properties')(),
    require('postcss-color-gray')(),
    require('postcss-color-function')(),
    require('postcss-calc')(),
    require('postcss-image-inliner')({
      assetPaths: [
        'src/assets/web_modules/header/',
        'src/assets/web_modules/way-finder/'
      ]
    }),
    require('autoprefixer')()
  ]

  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', function (err) {
      console.log(err.message)
      this.emit('end')
    })
    .pipe(gulpIf(isProduction, cssnano({ autoprefixer: false })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream({ match: 'dist/**/*.css' }))
})
