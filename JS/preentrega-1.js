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

console.log(`Bienvenido ${nombreCliente}`);

console.log(`Tu edad es ${edadCliente}`);

alert(`Bienvenido ${nombreCliente} tu edad es ${edadCliente}, ahora selecciona tu vehiculo.`);

// Pide Informacion del carro

let marca

let modelo

let anioCarro 

// Seleccion de Marca
marca = parseInt(prompt("Selecciona una marca: \n1. Ford \n2. Chevrolet \n3. Dodge"))

while (isNaN(marca) || marca < 1 || marca > 3) {
    marca = parseInt(prompt("Porfavor selecciona una marca: \n1. Ford \n2. Chevrolet \n3. Dodge"))
}

function alertaMarca(marca) {
    alert(`La marca seleccionada es ${marca}`)
}

switch (marca) {
    case 1:
        marca = "Ford";
        alertaMarca(marca);
        break;
    case 2:
        marca = "Chevrolet";
        alertaMarca(marca);
        break;
    case 3:
        marca = "Dodge";
        alertaMarca(marca);
        break;
}

const alertaModelo = (marca, modelo) => {
    alert(`Tu auto es un: ${marca} ${modelo}`);
}

function pideanio() {
    anioCarro = parseInt(prompt("Ingresa el año de tu carro"))

    while (isNaN(anioCarro) || anioCarro < 1950 || anioCarro > 2025 ) {
        anioCarro = parseInt(prompt("Ingresa un año valido de tu carro"))
    }
    alert(`Tu carro es un: ${marca} ${modelo} ${anioCarro}`)
}

if (marca === "Ford") {
    modelo = parseInt(prompt(`Selecciona tu modelo de ${marca}: \n1. Escape \n2. Explorer \n3. Mustang`))

    while (isNaN(modelo) || modelo < 1 || modelo > 3) {
        modelo = parseInt(prompt(`Porfavor selecciona tu modelo de ${marca}: \n1. Escape \n2. Explorer \n3. Mustang`))
    }

    switch (modelo) {
        case 1:
            modelo = "Escape";
            break;
        case 2:
            modelo = "Explorer";
            break;
        case 3:
            modelo = "Mustang";
            break;
    }
}

if (marca === "Chevrolet") {
    modelo = parseInt(prompt(`Selecciona tu modelo de ${marca}: \n1. Spark \n2. Tahoe \n3. Camaro`))

    while (isNaN(modelo) || modelo < 1 || modelo > 3) {
        modelo = parseInt(prompt(`Porfavor selecciona tu modelo de ${marca}: \n1. Spark \n2. Tahoe \n3. Camaro`))
    }

    switch (modelo) {
        case 1:
            modelo = "Spark";
            break;
        case 2:
            modelo = "Tahoe";
            break;
        case 3:
            modelo = "Tahoe";
            break;
    }
}

if (marca === "Dodge") {
    modelo = parseInt(prompt(`Selecciona tu modelo de ${marca}: \n1. Durango \n2. Charger \n3. Challenger`))

    while (isNaN(modelo) || modelo < 1 || modelo > 3) {
        modelo = parseInt(prompt(`Porfavor selecciona tu modelo de ${marca}: \n1. Durango \n2. Charger \n3. Challenger`))
    }

    switch (modelo) {
        case 1:
            modelo = "Durango";
            break;
        case 2:
            modelo = "Charger";
            break;
        case 3:
            modelo = "Challenger";
            break;
    }
}

alertaModelo(marca, modelo);
pideanio();



console.log(`Tu carro es un: ${marca} ${modelo} ${anioCarro}`);
