const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function styles(){
    return gulp.src()
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}