const { src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

exports.default = function() {
    return src([
            'assets/styles/orig/reset.css',
            'assets/styles/orig/main.css',
            'assets/styles/orig/mobile.css'
        ])
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(cleanCSS())
        .pipe(concat('styles.min.css'))
        .pipe(dest('assets/styles'));
}