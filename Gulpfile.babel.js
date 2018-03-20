'use strict';
 
import gulp from 'gulp';
import sass from 'gulp-sass';
 
const dirs = {
  src: 'src',
  dest: 'build'
};
 
const paths = {
  src: `${dirs.src}/app.scss`,
  dest: `${dirs.dest}/styles/`
};
 
gulp.task('styles', () => {
  return gulp.src(paths.src)
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(paths.dest));
});