// metodos para objetos 
let persona = {
    nombre: 'alberto',
    apellido: 'Diaz',
    gmail: 'adia@gmail.com',
    edad: 28,
    idioma: 'es',
    // Agregar metodos a objetos 
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = this.lang.toUpperCase();
    }
}

console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);