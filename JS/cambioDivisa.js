let dolar = 0;
let peso = 0;
let cambio = 0;
let valor = 360;
let tipo

const cotizarPesos = (i) => i / valor;
const cotizarDolar = (i) => i * valor;

tipo = parseFloat(prompt("Seleciona el cambio de moneda que necesites \n1. Pesos a Dolares \n2. Dolares a pesos"));

switch (tipo) {
    case 1:
        console.log("Selecionaste Cambio de Pesos a dolares");
        peso = parseFloat(prompt("Ingresa la cantidada de pesos que desesas cambiar a dolares"));
        console.log(`El cambio de ${cotizarPesos(peso)}`);
        break;
    case 2:
        console.log("Selecionaste Cambio de Dolares a pesos");
        dolar = parseFloat(prompt("Ingresa la cantidad de dolares que deseas cambiar a pesos"));
        console.log(`El cambio de ${cotizarDolar(dolar)}`);
        break;
    default:
        break;
}
  
