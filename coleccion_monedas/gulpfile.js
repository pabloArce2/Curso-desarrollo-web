const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function tarea(done) {
    while (true) {
        console.log('Hola mundo');
    }
    done();
}

function css(done) {
    
    src("src/scss/**/*.scss") // Archivo de entrada
        .pipe(sass()) // Compila el archivo SASS a CSS 
        .pipe(dest("build/css")); // Carpeta de destino
    
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.tarea = tarea;
exports.css = css;
exports.dev = dev; 