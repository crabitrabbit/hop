const gulp = require('gulp');

gulp.task('sass', require('./gulp-tasks/sass'));
gulp.task('watch', require('./gulp-tasks/watch'));
gulp.task('ci', ['sass']);


