const persona ={
    nombre: "Antonio",
    apellido: "Hurtado",
    edad: 25,
    casado: true
}

console.log(persona);
console.log(`Nombre de Persona 1 es: ${persona.nombre} ${persona.apellido}`);  //Medoto 1
console.log(`Edad de Persona 1 es: ${persona["edad"]}`);                       //Metodo 2

const persona2 ={
    nombre: "Nicole",
    apellido: "Arboleda",
    edad: 31,
    casado: false
}

console.log(persona2);
console.log(`Nombre de Persona 2 es: ${persona2.nombre} ${persona2.apellido}`);  //Medoto 1
console.log(`Edad de Persona 2 es: ${persona2["edad"]}`);                        //Metodo 2

// Reasignacion de valores

persona.edad = 50;
console.log(persona);
console.log(`La nueva edad de Persona 1 es: ${persona.edad}`); 

// Agregar propiedades

persona.pais = "peru";
persona.apodo = "DKV";

console.log(persona);

// For in 

for ( let valor in persona) {
    console.log(valor);
} 

// Llamado de valores

for ( let valor in persona) {
    console.log(persona[valor]);
} 

// Concatenado de valores y categorias

for ( let valor in persona) {
    console.log(`${valor}: ${persona[valor]}`);
} 


// Productos

const producto1 = {
    nombre: "Papa Peruanita",
    precio: 5,
    stock: 0
}
console.log(producto1);

const producto2 = {
    nombre: "Camote",
    precio: 5,
    stock: 100
}
console.log(producto2);

//Funcion Stock
const validarStock =(nombre ,stock) => {
    if (stock > 0) {
    console.log(`El producto ${nombre} tiene un stock de: ${stock}`);
    } else {
    console.log(`No hay en stock el producto ${nombre}`);
    }
}


validarStock(producto1.nombre, producto1.stock)

validarStock(producto2.nombre, producto2.stock)
