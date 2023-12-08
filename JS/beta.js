// Pedir infoacion del Cliente

let edadCliente

let nombreCliente

edadCliente = parseInt(prompt("Ingresa tu edad para poder continuar"));

while (isNaN(edadCliente) || edadCliente <= 17) {
    edadCliente = parseInt(prompt("La edad minima necesaria para ingresar es 18"));
}   

nombreCliente = prompt("Ingresa tu nombre")

while (nombreCliente == "") {
    nombreCliente = prompt("Ingresa tu nombre para continuar")
}

console.log(`Bienvenido ${nombreCliente} y tu edad es ${edadCliente}`);

alert(`Bienvenido ${nombreCliente} tu edad es ${edadCliente}, ahora selecciona tu vehiculo.`);

// Pide Informacion del carro

let marca

let modelo

let anioCarro 

function alertaMarca(marca) {
    alert(`La marca seleccionada es ${marca}`)
}
const alertaModelo = (marca, modelo) => {
    alert(`Tu auto es un: ${marca} ${modelo}`);
}

function pideAnio() {
    anioCarro = parseInt(prompt("Ingresa el año de tu carro"))
    
    while (isNaN(anioCarro) || anioCarro < 1950 || anioCarro > 2025 ) {
        anioCarro = parseInt(prompt("Ingresa un año valido de tu carro"))
    }
    alert(`Tu carro es un: ${marca} ${modelo} ${anioCarro}`)
}
let marca1 = ["Ford",["Escape","Explorer","Mustang"]];
let marca2 = ["Chevrolet",["Spark","Tahoe","Camaro"]];
let marca3 = ["Dodge",["Durango","Charger","Challenger"]];


// Seleccion de Marca
marca = parseInt(prompt(`Selecciona una marca: \n1. ${marca1[0]} \n2. ${marca2[0]} \n3. ${marca3[0]}`))

while (isNaN(marca) || marca < 1 || marca > 3) {
    marca = parseInt(prompt(`Porfavor selecciona una marca: \n1. ${marca1[0]} \n2. ${marca2[0]} \n3. ${marca3[0]}`))
}

switch (marca) {
    case 1:
        marca = marca1[0];
        alertaMarca(marca1[0]);
        break;
    case 2:
        marca = marca2[0];
        alertaMarca(marca2[0]);
        break;
    case 3:
        marca = marca3[0];
        alertaMarca(marca3[0]);
        break;
}

if (marca === marca1[0]) {
    modelo = parseInt(prompt(`Selecciona tu modelo de ${marca1[0]}: \n1. ${marca1[1][0]} \n2. ${marca1[1][1]} \n3. ${marca1[1][2]}`))

    while (isNaN(modelo) || modelo < 1 || modelo > 3) {
        modelo = parseInt(prompt(`Porfavor selecciona tu modelo de ${marca1[0]}: \n1. ${marca1[1][0]} \n2. ${marca1[1][1]} \n3. ${marca1[1][2]}`))
    }

    switch (modelo) {
        case 1:
            modelo = marca1[1][0]; 
            break;
        case 2:
            modelo = marca1[1][1];
            break;
        case 3:
            modelo = marca1[1][2];
            break;
    }
}

if (marca === marca2[0]) {
    modelo = parseInt(prompt(`Selecciona tu modelo de ${marca2[0]}: \n1. ${marca2[1][0]} \n2. ${marca2[1][1]} \n3. ${marca2[1][2]}`))

    while (isNaN(modelo) || modelo < 1 || modelo > 3) {
        modelo = parseInt(prompt(`Porfavor selecciona tu modelo de ${marca2[0]}: \n1. ${marca2[1][0]} \n2. ${marca2[1][1]} \n3. ${marca2[1][2]}`))
    }

    switch (modelo) {
        case 1:
            modelo = marca2[1][0];
            break;
        case 2:
            modelo = marca2[1][1];
            break;
        case 3:
            modelo = marca2[1][2];
            break;
    }
}

if (marca === marca3[0]) {
    modelo = parseInt(prompt(`Selecciona tu modelo de ${marca3[0]}: \n1. ${marca3[1][0]} \n2. ${marca3[1][1]} \n3. ${marca3[1][2]}`))

    while (isNaN(modelo) || modelo < 1 || modelo > 3) {
        modelo = parseInt(prompt(`Porfavor selecciona tu modelo de ${marca3[0]}: \n1. ${marca3[1][0]} \n2. ${marca3[1][1]} \n3. ${marca3[1][2]}`))
    }

    switch (modelo) {
        case 1:
            modelo = marca3[1][0];
            break;
        case 2:
            modelo = marca3[1][1];
            break;
        case 3:
            modelo = marca3[1][2];
            break;
    }
}

alertaModelo(marca, modelo);
pideAnio();



console.log(`Tu carro es un: ${marca} ${modelo} ${anioCarro}`);
