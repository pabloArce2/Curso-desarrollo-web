const num = 5;

const numf = factorial(num);

console.log(`El factorial de ${num} es ${numf}`);








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