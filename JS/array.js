// Array

let numeros = [1,2,3,4,5,6];
console.log(numeros);

let marcas = ["Ford","Chevrolet","Dodge"];
console.log(marcas);

let bol = [true, false, true];
console.log(bol);

// Objetos
let personas = [
    {nombre: "pepe", edad: 20},
    {nombre: "juan", edad: 120},
    {nombre: "maria", edad: 220,}
]
console.log(personas);

//mix casi no usado
let mix = [10, "pepe", false, {nombre:"ana", edad: 25}];
console.log(mix);

let mix2 = [10, "pepe", false, {nombre:"ana", edad: 25}, ["Ford", "Chevrolet","Dodge"]]; //array dentro de array
console.log(mix2);

// LLamado dentro de objetos
console.log(personas[2]);
console.log(personas[0].edad);

// Suma de distintos array
let suma = numeros[4] + mix[0];
console.log(suma);

// ciclo for
for (let i=0 ; i<6 ; i++) {
    console.log(numeros[i]);
}

//Propiedad length Cantidad de objetos de Array
console.log(numeros.length);

for (let i=0 ; i< numeros.length ; i++) {
    console.log(numeros[i]);
}