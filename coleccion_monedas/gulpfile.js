const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function tarea(done) {
    while (true) {
        console.log('Hola mundo');
    }
    done();
}

function css(done) {
    
    src("src/scss/app.scss") // Archivo de entrada
        .pipe(sass()) // Compila el archivo SASS a CSS 
        .pipe(dest("build/css")); // Carpeta de destino
    done();
}

exports.tarea = tarea;
exports.css = css;