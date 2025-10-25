// Programacion orientada a objetos  definiendo primero los objetos.
let x =  10;
console.log(x.length)

let persona = {
    nombre: 'alberto',
    apellido: 'Diaz',
    gmail: 'adia@gmail.com',
    edad: 28,
    // Agregar metodos a objetos 
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.apellido);
console.log(persona.gmail);
console.log(persona.nombre);

console.log(persona); /// impresion del objeto en JS
// uso de la propiedad nueva del objeto 
console.log(persona.nombreCompleto());  // llama a la función 



// Creación de un objeto pero con palabra reservada

let persona2 = new Object();  // JS crea objeto en memoria
persona2.nombre = 'Julio';
persona2.edad = 54;
persona2.estudio = 'Licenciatura';
persona2.tel = '5534567884';

// IMPRESION DEL OBJETO 
console.log(persona2.edad);