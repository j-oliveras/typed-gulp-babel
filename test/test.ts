import gulp = require('gulp');
import concat = require('gulp-concat');
import sourcemaps = require('gulp-sourcemaps');

import babel = require('gulp-babel');

const options: babel.Options = {
  presets: [ 'es2015' ],
  plugins: ['transform-runtime']
};

// TODO search a babel sample for all options.

// ****************************************
// Based on official usage example
// ****************************************

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(babel(options))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(babel({
      presets: [ 'es2015' ]
    }))
    .pipe(gulp.dest('dist'));
});

// ****************************************
// Based on official source maps example
// ****************************************

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel(options))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// ****************************************
// Based on official source maps example
// ****************************************

function logFileHelpers() {
    return null;
}

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel(options))
    .pipe(logFileHelpers());
});

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(logFileHelpers());
});

// ****************************************
// Based on official runtime example
// ****************************************

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(babel(options))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(babel({
      plugins: ['transform-runtime']
    }))
    .pipe(gulp.dest('dist'));
});
