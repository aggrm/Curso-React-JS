// Tipos de Dato

//Undefined

let cliente

console.log(cliente)
console.log(typeof cliente)

// Null
const descuento1 = null

console.log(typeof descuento)

//String o cadenas de texto
const alumno = "Juan"

console.log(alumno);
console.log(typeof alumno);

const producto = 'Minitor 49 pulgadas';

console.log(producto);
console.log(typeof producto);


//Numbers
const numero = 20.00
const numero1 = 30
const numero2 = -100
const numero3 = "50"

console.log(typeof numero);
console.log(typeof numero1);
console.log(typeof numero2);
console.log(numero2 +numero3);

//BigInt
const numeroGrande = BigInt(837489724897128947289147981271)

console.log(typeof numeroGrande)

//Boolean
const descuento = false

console.log(typeof descuento)

//Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)
