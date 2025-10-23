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

