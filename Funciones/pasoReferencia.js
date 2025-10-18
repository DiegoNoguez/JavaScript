// Paso por referencia  JS
// Objetos (array) se pasana por referencia

function cambiarValor(parametro){
    parametro[0]= 25;
}

// Llamar a la funcion 
let array = [10];
console.log(`Antes de funcion: ${array[0]}`);
cambiarValor(array);
console.log(`Despues de la funcion: ${array[0]}`);