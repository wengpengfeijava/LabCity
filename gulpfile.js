/**
 * Created by 46607 on 2017/3/23.
 */
var gulp = require('gulp');

const notifier = require('node-notifier');
// String
notifier.notify('Message');

// Object
notifier.notify({
    'title': 'My notification',
    'message': 'Hello, there!'
});

var markdown = require('gulp-markdown');

gulp.task('default', function () {
    return gulp.src('./admin/**/*.{md, MD}')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});