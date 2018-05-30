'use strict';

import gulp from 'gulp';
import jshint from 'gulp-jshint';
import babel from "gulp-babel";
import browserSync from 'browser-sync';

/**
 * Check javascript for syntax errors
 */
gulp.task('lint', () => {
    return gulp.src(['./js/*.js','!app/js/vendor/*.js'])
        .pipe(jshint({esversion: 6}))
        .pipe(jshint.reporter('default', { verbose: true }));
});

/**
 * Watch project files and reload the screen
 * Reloads the browser whenever HTML or JS files change
 */
gulp.task('watch', () => {
    // gulp.watch('./index.html', gulp.series(browserSync.reload));
    // gulp.watch('./js/**/*.js').on('change', gulp.series('lint', browserSync.reload));
    gulp.watch('./index.html',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', gulp.series('lint', browserSync.reload));
});

/**
 * Automatic Browser reload
 */
gulp.task('browserSync', (callback) => {
    browserSync.init({
        server: {
          baseDir: './'
        }
    }, callback)
});


/**
 * Default task for development environment
 */
gulp.task('default', gulp.series('lint', 'browserSync', 'watch'));