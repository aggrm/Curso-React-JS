//Eventos DOM

//======================================================================================================================================
// Click
//======================================================================================================================================
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('click', () => {
 heading.textContent = 'Un nuevo heading al dar click...'
})

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.textContent = 'Diste click'
    })
})

//======================================================================================================================================
// Inputs
//======================================================================================================================================

const inputNombre = document.querySelector('#nombre')

inputNombre.addEventListener('input', (e) =>{
    console.log(e.target.value);
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', pwd)
function pwd(){
    inputPassword.type="text"

    setTimeout(() => {
        inputPassword.type='password'
    }, 300)

}

//======================================================================================================================================
// Submit
//======================================================================================================================================
const formuario = document.querySelector('#formulario')
formuario.addEventListener('submit', e =>{

    e.preventDefault() //quitar la accion por defecto del evento o selector dom
    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value
    

    //Prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()
    

    const alerta = document.querySelector('DIV')
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')
    

    if(nombre  === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios...'
        alerta.classList.add('bg-red-500')
    }else{
        alerta.textContent = 'Todos los campos son CORRECTOS'
        alerta.classList.add('bg-green-500')
    }
    console.log(alerta);
    
    formuario.appendChild(alerta)
    setTimeout(() =>{
        alerta.remove()
    }, 3000);

    console.log('Enviando formulario...');
})