var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src(['./src/sass/**/*.scss'])
  .pipe(plumber())
  .pipe(sass())
  .pipe(gulp.dest('./css/withsass.css'));
});
gulp.task('default', ['sass'], function() {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
});
