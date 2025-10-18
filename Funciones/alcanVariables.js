// Alcance de variables en JavaScript JS

let varGlobal = 12;

// definicion de funccion
function miFuncion(varLocal){
    console.log(varLocal);
    // modificar variable global 
    // no se puede redefinir una variable global si esta definida 
    // con let si es con var es posible.
    varGlobal = 50;
}

// llamada de funciones
miFuncion(varGlobal);