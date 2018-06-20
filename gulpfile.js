var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('connect', function() {
  connect.server({
    root: './public',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src(['./**/*.html'])
  .pipe(connect.reload())
});


// css
gulp.task('sass', function() {
  gulp.src('./styling/scss/*.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('./public/assets/css'))
  .pipe(connect.reload())

});

//js
gulp.task('scripts', function() {
  return gulp.src('./styling/js/*.js')
    .pipe(concat('all.js'))
    //.pipe(uglify('all.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

// watch these
gulp.task('watch', function() {
  gulp.watch('./build/**/*.html', ['html']);
  gulp.watch('./styling/scss/*.scss', ['sass']);
  gulp.watch('./styling/js/*.js', ['scripts']);

});


gulp.task('default', ['html', 'sass', 'scripts', 'watch', 'connect']);
