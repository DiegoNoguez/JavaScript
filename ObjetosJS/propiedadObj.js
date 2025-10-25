// Muestra de como se puede acceder a propiedades en los objetos
// Definicion del objeto de ejemplo 
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

console.log(persona.nombre);

// Otras formas de acceder a las propiedades 
console.log(persona['apellido']);


// For in para acceder a las propiedades del objeto
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}