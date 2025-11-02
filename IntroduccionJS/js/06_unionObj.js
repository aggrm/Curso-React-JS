//Objetos - 
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

const cliente = {
    nombre : "juan",
    premiun : true
}

const carrito = {
    catidad: 1,
    ...producto //spread operator que es ...
}


const nueoObj ={
    ...producto,
    ...cliente
}

// mejor esta forma para unir obj
const objAssing = Object.assign(producto, cliente)

console.log(objAssing)

