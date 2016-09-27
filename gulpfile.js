var gulp = require('gulp');
var gm = require('gulp-gm');
var rename = require('gulp-rename');
var del = require('del');
var vinylPaths = require('vinyl-paths'); // from https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

gulp.task('default', function(callback) {
	var fs = gulp.src(['*.png','*.jpg','*.gif']);
	var t = gulp.src(['*.png','*.jpg','*.gif']);
	var vp1 = vinylPaths();
	var vp2 = vinylPaths();

	fs
		.pipe(vp1) // https://github.com/sindresorhus/vinyl-paths
		.pipe(gm(function(gmfile) {
			return gmfile.resize(475, 475).setFormat('png');
		}, {
			imageMagick: true
		}))
		.pipe(rename(function(path) {
			path.basename += "fs";
		}))
		.pipe(gulp.dest("D:\\Files\\MFWBooks.com\\Servers\\SFTP\\images\\items\\"))
		.on('end', function() {
			console.log(vp1.paths)
			del(vp1.paths);
		});

	t
		.pipe(vp2)
		.pipe(gm(function(gmfile) {
			return gmfile.resize(175, 175).setFormat('png');
		}, {
			imageMagick: true
		}))
		.pipe(rename(function(path) {
			path.basename += "t";
		}))
		.pipe(gulp.dest("D:\\Files\\MFWBooks.com\\Servers\\SFTP\\images\\items\\"))

		.pipe(gm(function(gmfile) {
			return gmfile.setFormat('gif').resize(125, 125).background('transparent').gravity('Center').extent(125, 125);
		}, { // syntax: http://aheckmann.github.io/gm/docs.html
			imageMagick: true
		}))
		.pipe(gulp.dest("Z:\\MFW\\VAI\\Docs\\Images"))

		.on('end', function() {
			del(vp2.paths);
		});


});
