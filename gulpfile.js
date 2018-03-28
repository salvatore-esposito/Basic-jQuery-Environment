/*
Gulpfile.js file for the tutorial:
Using Gulp, SASS and Browser-Sync for your front end web development - DESIGNfromWITHIN
http://designfromwithin.com/blog/gulp-sass-browser-sync-front-end-dev
Steps:
1. Install gulp globally:
npm install --global gulp
2. Type the following after navigating in your project folder:
npm install gulp gulp-util gulp-sass gulp-uglify gulp-rename gulp-minify-css gulp-notify gulp-concat gulp-plumber browser-sync --save-dev
3. Move this file in your project folder
4. Setup your vhosts or just use static server (see 'Prepare Browser-sync for localhost' below)
5. Type 'Gulp' and ster developing
*/

/* Needed gulp config */
const gulp = require('gulp');  
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const minifycss = require('gulp-minify-css');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const BasePath = './';

/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css', 'js/*.js'], {
        /*
        I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
        */
        proxy: 'http://localhost:8080'
        /* For a static server you would use this: */
        /*
        server: {
            baseDir: './'
        }
        */
    });
});

gulp.task('default', ['browser-sync'], function () {
    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch([BasePath + '**/**/*'], ['bs-reload']);
});
