// TABLAS DE MULTIPLICAR 

let num1=1;
let acumunlador;

//Ciclo for para que incremente 

for(acumunlador=0; acumunlador <=9; acumunlador++){
    console.log(`-------Tabla del ${num1} ------ \n`);
    for(let num2=1; num2 <= 10; num2++){
        let resultado = num1*num2;
        console.log(num1 ," * ", num2, " = ", resultado);
        resultado=0;

    }
    num1++;
}