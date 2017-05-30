import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';

gulp.task('pages', () => {
	console.log(args.watch);
	return gulp.src('app/**/*.ejs')
	.pipe(gulp.dest('server'))
	.pipe(gulpif(args.watch,livereload()))
})