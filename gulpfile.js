var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
});

// watchers
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});
