// Constructores de objeto.
// definimos una fucnion para objetos dd tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    // agregar constructor a un metodo
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// creacion del objeto 
let padre = new Persona('Andres', 'Cortes');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Ximena', 'Soto');
console-log(madre);


// ejemplos 
let miObjeto = new  Object();
let miObjeto2 = ('adios');

let miCadena1 = new String('HOla');
let miCadena2 = 'Hola';

let miNumero = new Number();
let miNumero2 = 1;

let miBoolean = new Boolean();
let miBoolean2 = false;

let miArray1 = new Array();
let miArray2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};