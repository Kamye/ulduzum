'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rigger = require('gulp-rigger');
var cssmin = require('gulp-minify-css');
var rimraf = require('rimraf');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var svgmin = require('gulp-svgmin');
var csscomb = require('gulp-csscomb');
var rename = require('concur-gulp-rename');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');

gulp.task('scss', function () {
    gulp.src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css/min'))
        .pipe(reload({stream: true}))
});

gulp.task('scss:unmin', function () {
    gulp.src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(prefixer())
        .pipe(csscomb())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css/unmin'))
        .pipe(reload({stream: true}))
});

gulp.task('scss:libs', function () {
    gulp.src('src/scss/libs/libs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css/min'))
        .pipe(reload({stream: true}))
});

gulp.task('scss:libs-unmin', function(){
    gulp.src('src/scss/libs/libs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css/unmin'))
        .pipe(reload({stream: true}))
});

gulp.task('webserver', function () {
    browserSync({
        server: {
            baseDir: "build/"
        },
        host: 'localhost',
        port: '3000',
        tunnel: true
    });
});

gulp.task('html', function(){
    gulp.src('src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    gulp.src('src/js/app.js')
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest('build/js/min'))
        .pipe(reload({stream: true}));
});

gulp.task('js:unmin', function () {
    gulp.src('src/js/app.js')
        .pipe(rigger())
        .pipe(gulp.dest('build/js/unmin'))
        .pipe(reload({stream: true}));
});

gulp.task('js:libs', function () {
    gulp.src('src/js/libs/libs.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js/min'))
        .pipe(reload({stream: true}));
});

gulp.task('js:libs-unmin', function () {
    gulp.src('src/js/libs/libs.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js/unmin'))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function () {
    watch(['src/js/app.js'], function (ev, callback) {
        gulp.start('js');
    });
    watch(['src/scss/*.scss', 'src/scss/templates/*.scss', 'src/scss/responsive/*.scss'], function (ev, callback) {
        gulp.start('scss');
    });
    watch(['src/*.html', 'src/templates/*.html'], function (ev, callback) {
        gulp.start('html');
    });
});

gulp.task('copy:images', function () {
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('build/images'));
    gulp.src('src/images/bgs/*.*')
        .pipe(gulp.dest('build/images/bgs'));
    gulp.src('src/images/icos/*.*')
        .pipe(gulp.dest('build/images/icos'));
    return gulp.src('src/images/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(gulp.dest('build/images/svg'))
});

gulp.task('copy:fonts', function () {
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('copy:scripts', function () {
/*    gulp.src('bower_components/jQuery/dist/jquery.js')
        .pipe(gulp.dest('src/js/libs'));
    gulp.src('bower_components/slick-carousel/slick/slick.js')
        .pipe(gulp.dest('src/js/libs'));
    gulp.src('bower_components/jquery-mask-plugin/src/jquery.mask.js')
        .pipe(gulp.dest('src/js/libs'));
    gulp.src('bower_components/jquery-validate/dist/jquery.validate.js')
        .pipe(gulp.dest('src/js/libs'));
    gulp.src('bower_components/Tabslet/jquery.tabslet.js')
        .pipe(gulp.dest('src/js/libs'));
    gulp.src('node_modules/slick-fullscreen/slick-fullscreen.js')
        .pipe(gulp.dest('src/js/libs'));*/
});

gulp.task('copy:styles', function () {
/*    gulp.src('bower_components/slick-carousel/slick/slick.scss')
        .pipe(gulp.dest('src/scss/libs'));
    gulp.src('bower_components/normalize-css/normalize.css')
        .pipe(rename('normalize.scss'))
        .pipe(gulp.dest('src/scss/libs'));
    gulp.src('node_modules/slick-fullscreen/slick-fullscreen.css')
        .pipe(rename('slick-fullscreen.scss'))
        .pipe(gulp.dest('src/scss/libs'));*/
});

/*gulp.task('copy:svg', function () {
    return gulp.src('src/images/svg/!*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(gulp.dest('build/images/svg'))
});*/

gulp.task('copy-src', [
    'copy:scripts',
    'copy:styles'
]);

gulp.task('copy-build', [
    'copy:images',
    'copy:styles',
/*    'copy:svg'*/
]);

gulp.task('build', [
    'copy:images',
    'copy:fonts',
    'copy:scripts',
    'copy:styles',
    /*'copy:svg',*/
    'html',
    'scss',
    'scss:libs',
    'scss:unmin',
    'scss:libs-unmin',
    'js',
    'js:libs',
    'js:unmin',
    'js:libs-unmin'
]);

gulp.task('clean', function (callback) {
    rimraf('build/', callback)
});

gulp.task('default', ['webserver', 'watch']);

gulp.task('copy:server', function () {
    return gulp.src('build/*/**')
        .pipe(ftp({
            host: 'wonderlaw.xyz',
            user: 'admin_pance',
            pass: 'kDl0o0oBtv',
            remotePath: 'public_html'
        }))
        .pipe(gutil.noop());
});