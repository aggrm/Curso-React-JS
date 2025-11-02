//Objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

console.log(producto)
console.log(typeof producto)
console.table(producto)

//haceso a las key
console.log(producto.nombre)
console.log(producto.precio)


// Destructuring es lo mismo que producto.nombre solo que on llaves porque le podemos 
// meter mas variables dentro de una lina en el array
const nombreAntiguo = producto.nombre
const {nombre, precio, disponible} = producto


//Object Literal Enhacement para agrupar variables aunqie se llamen igual los key y values. 
//En caso que sean diferentes lo has de nombrar en el value
const autenticado = true
const usuario2 = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario: usuario2
}

console.log(nuevoObjeto)