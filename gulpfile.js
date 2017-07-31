/**
 * Created by 46607 on 2017/3/23.
 */
var gulp = require('gulp');

const notifier = require('node-notifier');
// // String
// notifier.notify('Message');
//
// // Object
// notifier.notify({
//     'title': 'My notification',
//     'message': 'Hello, there!'
// });

var markdown = require('gulp-markdown');

gulp.task('default', function () {
    return gulp.src('./admin/**/*.{md, MD}')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

var browserSync = require('browser-sync');


gulp.task('serve1', function () {
    browserSync.init({
        port: 1515,
        open: false,
        // xip: true,
        server: {
            baseDir: './src',
            routes: {
                '/bower_components': './bower_components'
            }
        }
    })
})

gulp.task('serve2', function () {
    browserSync.init({
        port: 2222,
        open: false,
        server: {
            baseDir: './example/test2',
            routes: {
                '/bower_components': './bower_components'
            }
        }
    })
});

gulp.task('inject', function () {

})