// En este código se muestre como se concadenan los string con el operador de + para juntar cadenas o strings 
const myStr = "This is the start "+"This is the end"; 

//otra forma de concadenar string en js es con el operador +=
let ejemplo = "This is the first sentence. ";
ejemplo+= "This is the second sentence.";

//Construccion de cadenas con variables(string)
const myName = "DiegoNoguez";
const ejemplo2 = "My name is "+myName+" and I am well!";

//Agregacion de variables a cadenas(strings) con el operador +=
const someAdjective = "Es asombroso ";
let eje1 = "Learning to code is ";
myStr+=someAdjective;
console.log(myStr); 

//Uso de corchetes para obtencion del ultimo caracter dentro de una linea.
const ultimaLetra=eje1[eje1.length - 1];
console.log(ultimaLetra);

//Caracter unesimo en la cadena
const penultimoCaracter=eje1[eje1.length - 3];
console.log(penultimoCaracter);

