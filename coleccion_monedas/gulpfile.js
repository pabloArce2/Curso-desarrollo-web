function tarea(done) {
    let cont = 0;
    while (true) {
        //console.log('Hola mundo');
        cont++;
        if (cont === 1000) { break; }
    }

    done();
}

exports.tarea = tarea;