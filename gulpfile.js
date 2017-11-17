let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function(){
    gulp.src('./styles/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
    gulp.watch("./styles/style.css",['styles'])
});