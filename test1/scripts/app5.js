/*Objeto literal */
var persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}

// Object constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.getNombre() = function (){
        return this.nombre;
    }

Tarea.prototype.getUrgencia() = function (){
    return this.urgencia;
}

const tarea1= new Tarea('Aprender Javascript y React', 'Urgente');