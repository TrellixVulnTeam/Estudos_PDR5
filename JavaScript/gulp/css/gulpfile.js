const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function tranformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

const copiarHTML = () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(tranformacaoCSS, copiarHTML)