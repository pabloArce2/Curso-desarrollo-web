class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const juan = new Persona("Juan");

const nombre = juan.nombre;
console.log(nombre);

try {
    console.log(nombre2);
}
catch (error) {
    console.log(error);
}

console.log("Esto se ejecuta de todos modos");
/*console.log(nombre2);
console.log("Esto no se ejecuta");*/