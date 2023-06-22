const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500, definition: function () { console.log(`Este es un producto de ${this.precio}`) } }, /*Si fuera un arrow function no funcionaria */
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

console.log(carrito[0].definition());

// forEach

carrito.forEach(producto => console.log(producto.nombre));

// map

const arreglo1 = carrito.map(producto => producto.nombre);