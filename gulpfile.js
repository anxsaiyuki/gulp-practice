var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('hello', function() {
	console.log("hello test");
})

gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Other watchers
})

gulp.task('copy', function() {
	var folders = ['src/**/*.html','src/**/*.css','src/**/*.js','src/**/*.png'];

	folders.map(function(folder) {
		return gulp.src(folder)
					     .pipe(gulp.dest('./dist/'));
	})
	//return merge(tasks);
})

gulp.task('clean', function() {
	return del([
		'dist/**/*'
	])
})

gulp.task('prod', ['clean', 'copy']);