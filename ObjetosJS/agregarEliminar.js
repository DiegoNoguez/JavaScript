// Agregar o eliminar ppropiedades de nuestro objeto en JS
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


persona.tel= '838832029'; // se esta agregando una nueva propiedad
console.log(persona);

// para eliminar una propiedad 
delete persona.tel;
console.log(persona);

// Formas de impresion de un objeto 
// Concatenar cada valor de cada propiedad
console.log(persona.nombre+' '+persona.apellido);

// for in 
for (nombrePropiedad in persona){
    console.log(perosna[nombrePropiedad]);
}

// uso de la sintaxis object.values
let personaArray = Object.values(persona);

console.log(personaArray);

// cadena en JSOn
let personaString = JSON.stringify(perosna);
console.log(personaString);