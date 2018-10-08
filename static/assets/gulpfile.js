var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

//Compile CSS
gulp.task('css', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        'sass/'
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css/'))
});

gulp.task('js', function () {
    return gulp.src([
      'js/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js/dist/'));
});


//Watch for changes
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['css']);
    gulp.watch('js/*.js',['js']);
});

//Gulp command searchs for 'dafult' task to run
gulp.task('default', [ 'watch' ]);