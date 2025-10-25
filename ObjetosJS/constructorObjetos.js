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

let madre = new Persona('Ximena', 'Soto');
console-log(madre);
