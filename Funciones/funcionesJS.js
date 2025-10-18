// Funciones en JS
// 1 Declarar funciones 
function sumar(a,b){
    let resultado =  a + b;
    return resultado;
}
function resta(a,b){
    let resultadoRes = a - b;
    return resultadoRes;
}

// 2.- Llamar o invocar a la función 
let nu1 = 4, num2 = 6;
let resultados = sumar(nu1, num2);
let c = resta(nu1, num2);
console.log(`El resultado de la suma es: ${resultados} y de la resta es ${c}`);