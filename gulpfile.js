var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var inlineCSS = require('gulp-inline-css');
var htmlclean = require('gulp-htmlclean');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');
var webserver = require('gulp-webserver');

gulp.task('css', function() {
	gulp.src(['src/**/*.css', '!node_modules/**'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist'));
});

gulp.task('html', ['css'], function() {
	gulp.src(['src/**/*.html', '!node_modules/**'])
		.pipe(htmlclean())
		.pipe(gulp.dest('dist'));
});

gulp.task('html:index', ['html'], function() {
	gulp.src('dist/index.html')
		.pipe(inlineCSS())
		.pipe(gulp.dest('dist'));
});

gulp.task('js', function (cb) {
  pump([
        gulp.src(['src/**/*.js', '!node_modules/**', '!gulpfile.js']),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('imageoptim', function() {
	gulp.src(['src/**/*.{png,jpg}', '!node_modules/**'])
		.pipe(imagemin([
				imageminPngquant({
					quality: 98
				}),
				imageminMozjpeg({
					quality: 75
				})
			], {
	    	verbose: true
	    }))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['html:index', 'js', 'imageoptim']);

gulp.task('serve', function() {
	return gulp.src('dist')
		.pipe(webserver({
			open: true,
			livereload: true,
		}));
});

gulp.task('default', ['serve']);