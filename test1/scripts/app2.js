const num = 5;

const numf = factorial(num);

let amount = 1000;

console.log(`El factorial de ${num} es ${numf}`);
console.log(num.toString() + " tiene " + num.toString().length + " digitos");

amount = addMoney(100);
console.log(`El dinero que tengo es ${amount}`);

function factorial(numero) { 
    if (numero <= 0) { 
        return 1; 
    } else { 
        return numero * factorial(numero - 1); 
    }
}

const raizCuadrada = function(numero) { 
    return Math.sqrt(numero); 
}

function addMoney(money) {
    return amount += money;
}