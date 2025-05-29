//Uso de Arrays y creación de los mismos dentro de JS
//Defincion de un array
const Array =["Hola", 5, "Array"];
   

//Anidar un array dentro de otro
Array=["Hola", 5, "Array", [1, 2, 3]];

//Aceder a los datos de un array mediante su indice
console.log(Array[0]); // "Hola"
const data = Array[2]; // "Array"

//modificar un array con indices 
Array[1] =15;


//Aceder a arrays multidimensionales mediante indices
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 88, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);    // 88

//Manipulación de arrays mediante el metodo push
Array.push("Nuevo Elemneto");//se añade aelemento al final del propio array 

