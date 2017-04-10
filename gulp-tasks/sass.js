const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const del = require('del');
const rename = require('gulp-rename')

module.exports = (done) => {
	del(['./dist']).then(paths => {
		gulp.src([__dirname+'/../src/sass/**/*.scss'])
			// Pipe un-minified
			.pipe(sass({outputStyle: 'expanded'}))
			.pipe(gulp.dest(__dirname + '/../dist/'))
			// Pipe minified
			.pipe(rename({ extname: '.min.css' }))
			.pipe(sass({outputStyle: 'compressed'}))
			.pipe(gulp.dest(__dirname + '/../dist/'))
		done();
	});
};
