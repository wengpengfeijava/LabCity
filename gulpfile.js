/**
 * Created by 46607 on 2017/3/23.
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: './src',

        },
        port: 1888
    });
});
