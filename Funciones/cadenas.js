// Funciones y cadenas en JS
// cadenas imutables en JS ( no se puede modificar el valor)

function cambiarValor(parametro){
    parametro = 'Adios';
}

// Llamar funcion 
let argumento = 'hola';
console.log(`Antes de la funcion: ${argumento}`);
cambiarValor(argumento);
console.log(`Despues de la funcion: ${argumento}`);