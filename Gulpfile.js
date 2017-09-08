var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task ('estilos', function (){
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(gulp.dest('public'));
})

gulp.task('default', ['estilos'])