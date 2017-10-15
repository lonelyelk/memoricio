const gulp = require('gulp'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	elm = require('gulp-elm');

gulp.task('elm-init', elm.init);

gulp.task('elm', ['elm-init'], () => {
	return gulp.src('./src/*.elm')
		.pipe(elm.bundle('main.elm.js'))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('css', () => {
	return gulp.src(['./node_modules/purecss/build/pure-min.css'])
		.pipe(concat('pure.concat.css'))
		.pipe(rename('pure.min.css'))
		.pipe(gulp.dest('./public/css'))
});
