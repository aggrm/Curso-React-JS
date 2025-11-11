
//funnction separadora en log
function separar(mensaje) {
    console.log(`====================================================\n====================== ${mensaje} ======================\n====================================================`);
}
// Tipos de Dato

//Undefined

let cliente
separar('undefined')
console.log(cliente)
console.log(typeof cliente)

// Null
const descuento1 = null
separar('null')
console.log(typeof descuento)

//String o cadenas de texto
const alumno = "Juan"
separar('String')
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
separar('Nuumbers')
console.log(typeof numero);
console.log(typeof numero1);
console.log(typeof numero2);
console.log(numero2 +numero3);

//BigInt
const numeroGrande = BigInt(837489724897128947289147981271)
separar('BigInt')
console.log(typeof numeroGrande)

//Boolean
const descuento = false
separar('booleanos')
console.log(typeof descuento)

//Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
separar('symbol')
console.log(primerSymbol === segundoSymbol)
