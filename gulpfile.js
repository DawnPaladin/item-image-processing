var gulp = require('gulp');
var gm = require('gulp-gm');
var rename = require('gulp-rename');
var del = require('del');
var vinylPaths = require('vinyl-paths'); // from https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

gulp.task('default', function(callback) {
	var fs = gulp.src('*.png');
	var t = gulp.src('*.png');
	var vp1 = vinylPaths();
	var vp2 = vinylPaths();

	fs
		.pipe(vp1) // https://github.com/sindresorhus/vinyl-paths
		.pipe(gm(function(gmfile) {
			return gmfile.resize(475, 475);
		}, {
			imageMagick: true
		}))
		.pipe(rename(function(path) {
			path.basename += "fs";
		}))
		.pipe(gulp.dest("D:\\Files\\MFWBooks.com\\Servers\\SFTP\\images\\items\\"))
		.on('end', function() {
			del(vp1.paths);
		});

	t
		.pipe(vp2)
		.pipe(gm(function(gmfile) {
			return gmfile.resize(175, 175);
		}, {
			imageMagick: true
		}))
		.pipe(rename(function(path) {
			path.basename += "t";
		}))
		.pipe(gulp.dest("D:\\Files\\MFWBooks.com\\Servers\\SFTP\\images\\items\\"))
		.on('end', function() {
			del(vp2.paths);
		});


});
