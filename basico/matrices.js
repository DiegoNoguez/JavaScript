// Matriz dentro de JS
// Declaracion de un matriz 
let matriz = [[],[]];

// Modificar valores
matriz[0][0] = 100;
matriz[0][1] = 25;
matriz[0][2] = 65;

// renglon 1

matriz[1][0] = 100;
matriz[1][1] = 205;
matriz[1][2] = 75;

// Lectura de un arregolo
console.log(`Acceso a un elemento[0][2] = ${matriz[0][2]}`);

// Impresion de matriz 
console.log(matriz);


// SINTAXIS SIMPLIFICADA PARA DECALRAR UNA MATRIZ  E ITERACION 

let matriz2 = [[50,'Hola',54.5],[87,48,'JS'],[890,45,78,47]]

// Renglones de la matriz 
console.log(matriz2.length);

// N0 columnas depende del regnglo que se selecciones.
console.log(matriz2[0].length);
console.log(matriz2[1].length);  // muestra las columnas
console.log(matriz2[2].length);

console.log("Impresion de la matriz mediante el uso del for");
// Lectura de datos con impresion de forma ordenada con for Anidado
for(let i = 0; i < matriz2.length; i++){
    // Lectura de columnas
    for(let j = 0; j< matriz2[i].length; j++){
        console.log(matriz2[i][j], "\t");
    }
    console.log("\n")
}