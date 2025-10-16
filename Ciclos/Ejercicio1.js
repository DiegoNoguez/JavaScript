// Impresion de los primeros 10 numeros de 3 en 3 
// tanto en psoitivo como negativo 
// Ejemplo de impresion 1 4 7 10
// Negativo 1 -2 -5 -8
// Inicio del ejercicio 

let numeroIncrementar = 1;
console.log("Numeros en incremento");
for(numeroIncrementar; numeroIncrementar <= 10; numeroIncrementar+=3){
    console.log(numeroIncrementar+"\t");
}

// EJercio con numeros negativos.
numeroIncrementar = 1;
console.log ("Numeros en decremento");
console.log("Impresion de los numeros en formato negativo");
for(numeroIncrementar; numeroIncrementar >= -10; numeroIncrementar -=3){
    console.log(numeroIncrementar+ "\t");
}
