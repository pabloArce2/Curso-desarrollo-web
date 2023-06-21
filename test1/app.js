let a = 1.2;
let b = "gacela";
let c = true;
let d = null;
let e = undefined;
let f = Symbol("f");
let objeto = {
    nombre: "gacela",
    clase: "gacela",
    edad: 20
};
let h = [1, 2, 3, 4, 5];
let i = function () { };
let j = new Date();
let k = new Error("Error");
let l = /a-z/;
let m = new Map();
let n = new Set();

let namee = new String("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?");
let index = namee.indexOf("dolor");

console.log(typeof g);
console.log(index);
console.log(namee.includes("dolor"));

number = Math.random() * 100;
console.log(Math.round(number));

console.log(objeto);
a = 2;
if (a == 2) {
    objeto.imagen = "ruta.jpg";
    delete objeto.edad;
    console.log(objeto);
}

let objeto2 = {
    nombre: "perro",
    clase: "perro",
    edad: 20
};
Object.freeze(objeto2);
objeto2.imagen = "ruta.jpg";
console.log(objeto2);
let superObjeto = {...objeto2, ...objeto}
console.log(superObjeto);



