
let precio = 0;
let impuesto = 0;
let total = 0;

precio = parseFloat(prompt("Ingresa el precio"));
impuesto = parseFloat(prompt("Ingresa el impúesto"));

total = precio + (precio * (impuesto/100));

console.log(`el precio con impuesto es ${total}`);
console.log(`el precio es ${precio}`);
console.log(`el impuesto es %${impuesto}`);