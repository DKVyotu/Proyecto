
let numeros = [2,3,4,5];
console.log(numeros);

// Metodos para agregar unshift y push

// Metodo unshift   Los pone en la posicion primera
numeros.unshift(1)
console.log(numeros);

// Metodo push      Los pone en la ultima posicion
numeros.push(6);
console.log(numeros);

// Metodo para quitar shift y pop

// Metodo shift  quita el primero
numeros.shift();
console.log(numeros);


// Metodo pop    quita el ultimo
numeros.pop();
console.log(numeros);

// Metodo para eliminar rango

numeros.splice(1,2)   // de 1 hasta la posicion 2
console.log(numeros);

let nHombre = ["Pepe", "juan", "Pedro", "Ana", "Maria"];
let nMujer= ["Pepe", "juan", "Pedro", "Ana", "Maria"];

nHombre.splice(3,4);
console.log(nHombre);

nMujer.splice(0,3);
console.log(nMujer);

// Metodo join

console.log(nHombre.join(" ")); // Podemos separlo con lo que queramos

//Metodo concat

let nHombreMujer = nHombre.concat(nMujer); // Junta los array
console.log(nHombreMujer);


// Metodo Copia con slice
let perso = ["Pepe", "juan", "Ana", "Maria"];

let conAna = perso.slice(2,3)
console.log(conAna);

// Metodo para verificar si esta dentro del array  

console.log(nHombre.includes("Pepe")); 
console.log(nHombre.includes("pepe")); // es keysentive
 
console.log(nHombre);
nHombre.reverse();
console.log(nHombre);