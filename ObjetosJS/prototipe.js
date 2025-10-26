// Forma de agregar mas propiedades fueroa de un objeto
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

// Agregacion de nuevas propiedades
Persona.prototype.direccion = 'aksjajsjda';

// creacion del objeto 
let padre = new Persona('Andres', 'Cortes');
padre.direccion = 'ADISOAJSJ6A';
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Ximena', 'Soto');
console-log(madre);