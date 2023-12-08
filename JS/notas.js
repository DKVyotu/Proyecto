// Objeto para almacenar marcas y modelos
let marcasConModelos = {
    "Ford": ["Escape", "Explorer", "Mustang"],
    "Chevrolet": ["Spark", "Tahoe", "Camaro"],
    "Dodge": ["Durango", "Charger", "Challenger"]
};

function seleccionarModelo(marcaSeleccionada) {
    let modelosDeMarca = marcasConModelos[marcaSeleccionada];

    let mensajePrompt = `Selecciona tu modelo de ${marcaSeleccionada}:\n`;
    for (let i = 0; i < modelosDeMarca.length; i++) {
        mensajePrompt += `${i + 1}. ${modelosDeMarca[i]}\n`;
    }

    let modeloSeleccionado = parseInt(prompt(mensajePrompt));

    if (!isNaN(modeloSeleccionado) && modeloSeleccionado >= 1 && modeloSeleccionado <= modelosDeMarca.length) {
        let modeloElegido = modelosDeMarca[modeloSeleccionado - 1];
        console.log(`Has seleccionado el modelo ${modeloElegido} de ${marcaSeleccionada}`);
    } else {
        console.log("Selección inválida.");
    }
}

// Ejemplo de uso
let opcionMarca = prompt("Selecciona una marca:\n1. Ford\n2. Chevrolet\n3. Dodge");

switch (opcionMarca) {
    case "1":
        seleccionarModelo("Ford");
        break;
    case "2":
        seleccionarModelo("Chevrolet");
        break;
    case "3":
        seleccionarModelo("Dodge");
        break;
    default:
        console.log("Marca no válida.");
        break;
}
