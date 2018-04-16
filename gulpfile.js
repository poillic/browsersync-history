const gulp = require('gulp');
const browserSync = require('browser-sync');
const historyFallback = require('connect-history-api-fallback');

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './static',
      middleware: [
        historyFallback()
      ]
    }
  });
});

gulp.task('default', ['serve']);