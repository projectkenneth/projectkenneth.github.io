let { src, dest } = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');

exports.default = function() {
    return src([
            'assets/styles/orig/reset.css',
            'assets/styles/orig/main.css',
            'assets/styles/orig/mobile.css'
        ])
        .pipe(cleanCSS())
        .pipe(concat('styles.min.css'))
        .pipe(dest('assets/styles'));
}