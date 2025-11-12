//======================================================================================================================================
// Manipulacion de css - Obtiene del HTML o DOM todos los elementos con dicha clase
//======================================================================================================================================

//funnction separadora en log
function separar(mensaje) {
    console.log(`====================================================\n====================== ${mensaje} ======================\n====================================================`);
}

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

//Atacando directamente al jquery
/*
heading.textContent = 'Un nuevo heading'
heading.id = 'Un nuevo ID'
heading.remove('id')
*/

//Atacado de distinta forma
const inputNombre = document.querySelector(('#nombre'))
inputNombre.value = 'Un nuevo valor'
console.log(inputNombre.classList);


//Atacar a un listado
enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace')


