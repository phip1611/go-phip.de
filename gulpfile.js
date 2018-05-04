let gulp_brotli = require('gulp-brotli');
let gulp_gzip = require('gulp-gzip');
let gulp = require('gulp');

gulp.task('static_brotli', () => {
  return gulp.src("dist/*.{js,css,html,txt,ico,svg}")
    .pipe(gulp_brotli.compress({
      // Empirische Tests (je 10 Versuche) mit Juniorzeit.de haben ergeben, dass die Stufe 11 für bis zu 150ms zusätzliche
      // Dekompressionstime benötigt bei gerade einmal 6% weniger Daten
      // daher Stufe 9 statt 11!

      // 10x mit Stufe 11:  756,1ms (Durchschnitt)
      // 10x mit Stufe  9:  569,5ms (Durchschnitt)
      quality: 9
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('static_gzip', () => {
  return gulp.src("dist/*.{js,css,html,txt,ico,svg}")
    .pipe(gulp_gzip({gzipOptions: {
        level: 8,
        extension: 'gz'
    }}))
    .pipe(gulp.dest('dist'));
});

gulp.task('prod_postbuild', gulp.parallel('static_brotli', 'static_gzip'));
gulp.task('default', gulp.series('prod_postbuild'));
