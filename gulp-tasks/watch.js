const gulp = require('gulp');

module.exports = (done) => {
	gulp.watch(['./src/sass/**/*.scss'], ['sass']);
	done();
};
