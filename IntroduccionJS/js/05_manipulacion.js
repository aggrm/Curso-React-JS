//Objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

//Reescribe un valor
producto.disponible = true;

//Si no exite la propiedad lo añade
producto.imagen = 'foto.jpg'

//eliminar propiedades
delete producto.nombre

//limitar para no poder meter mas propiedades aunque no exista y modificar el obj
Object.freeze(producto)

//Permite modificar las propiedades que ya existen pro no añadir no existntes
Object.seal(producto)