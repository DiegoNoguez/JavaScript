// Funciones Recursivas
// Imprimir 3,2,13

function funRecursvia(num){
    // Caso base 
    if(num == 1)
        console.log(num);
    else{
        console.log(num);
        funRecursvia(num - 1);
    }
}

// Llamada de la fucnion recursiva. 
funRecursvia(4);