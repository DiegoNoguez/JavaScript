// Ejemplo Arrays en el lenguaje de programación de Java Script o JS
let numeroArray= [];

// Modificar valores del array puede ser cualquier tipo de dato.
numeroArray[0]=13;
numeroArray[1]=5;
numeroArray[2]=3;
numeroArray[3]='Adios';

console.log(numeroArray);


// SINTAXIS SIMPLIFICADA DE ARRAYS 

let newArrayNUmber = [100,500,'Alpha',400,78,5]

console.log(`Elemento 1 del arrya : ${newArrayNUmber[1]}`);


// iteracion de arrays
// Lectura del array por ciclo 
for(let i=0; i<=5;i++){
    console.log(newArrayNUmber[i],"\n");
}

// otra forma de hacerlo es con for length
for(i=0; i<newArrayNUmber.length; i++ ){console.log(newArrayNUmber[i])}