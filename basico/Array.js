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
