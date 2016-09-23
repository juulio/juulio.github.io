//all plugins requiered
var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpIf = require('gulp-if');
var cache = require('gulp-cache');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

//------------------------------------------------------------------------------
// Tasks for Development
// sass processing
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// watch project files and reload
gulp.task('watch', function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

// live reload dev environment
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

//------------------------------------------------------------------------------
// Tasks for Production Build
// minify CSS files
gulp.task('minify-css', function() {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS({compatibility : 'ie8'}))
    .pipe(gulp.dest('css'));
});

// Concat css and js files
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('app/*.js', uglify()))
    .pipe(gulp.dest('.'))
});

// copy fonts and experiments folder to root folder
gulp.task('copyFolders', function() {
  gulp.src('app/img/**/*').pipe(gulp.dest('img'));
  gulp.src('app/fonts/**/*').pipe(gulp.dest('fonts'));
  gulp.src('app/experiments/**/*').pipe(gulp.dest('experiments'));
  gulp.src('app/js/**/*').pipe(gulp.dest('js'));
});

// cache clear task
gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
});

// default task for development environment
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});

// build task for production environment
gulp.task('build', function (callback) {
  runSequence(['sass', 'minify-css', 'useref', 'copyFolders'],
    callback
  )
});
