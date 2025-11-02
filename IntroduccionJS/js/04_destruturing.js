//Objetos - Destructuring de 2 o más obj

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

const cliente = {
    nombre : "juan",
    premiun : true,
    direcion: {
        calle : "Av. Canal Mediterraneo"
    }
}

const {nombre} = producto

const {nombre: nombreCliente, direcion: {calle}} = cliente