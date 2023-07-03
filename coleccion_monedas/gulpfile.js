const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


const cache = require('gulp-cache');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

function tarea(done) {
    while (true) {
        console.log('Hola mundo');
    }
    done();
}

function css(done) {
    
    src("src/scss/**/*.scss") // Archivo de entrada
        .pipe(plumber()) // Evita que se detenga el proceso en caso de error
        .pipe(sass()) // Compila el archivo SASS a CSS 
        .pipe(dest("build/css")); // Carpeta de destino
    
    done();
}

function versionWebp(done) {
    src("src/assets/img/**/*.{jpg,png}")
        .pipe(webp())
        .pipe(dest("build/assets/img"));
    
    done();
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }

    src("src/assets/img/**/*.{jpg,png}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("build/assets/img"));
    
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.tarea = tarea;
exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(dev, versionWebp, imagenes); 