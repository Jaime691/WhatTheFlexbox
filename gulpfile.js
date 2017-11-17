let gulp = require("gulp");
let autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function() {
  gulp
    .src("./styles/style_mobile.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));

  gulp
    .src("./styles/style_slider.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));

  gulp
    .src("./styles/style_pricing.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));

  gulp
    .src("./styles/style_form.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));

  gulp
    .src("./styles/style_app.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("./styles/style_mobile.css", ["styles"]);
  gulp.watch("./styles/style_slider.css", ["styles"]);
  gulp.watch("./styles/style_pricing.css", ["styles"]);
  gulp.watch("./styles/style_form.css", ["styles"]);
  gulp.watch("./styles/style_app.css", ["styles"]);
});
