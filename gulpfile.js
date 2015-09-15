var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', function() {
    gulp.src('lmnote.js')
        .pipe(minify())
        .pipe(gulp.dest('.'));
});