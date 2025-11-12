//Selectores

//funnction separadora en log
function separar(mensaje) {
    console.log(`====================================================\n====================== ${mensaje} ======================\n====================================================`);
}


//======================================================================================================================================
// Selector - Obtiene del HTML o DOM solo un elemento con dicha clase el primero que cumpla la condicion
//======================================================================================================================================
const heading = document.querySelector('.heading')
separar('selector')
console.log(heading)
console.log(heading.tagName)
console.log(heading.textContent)
console.log(heading.classList)
console.log(heading.id)

//======================================================================================================================================
// Selectorall - Obtiene del HTML o DOM todos los elementos con dicha clase
//======================================================================================================================================
separar('selectorAll')
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces);

