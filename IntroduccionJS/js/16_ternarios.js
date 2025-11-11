//funnction separadora en log
function separar(mensaje) {
    console.log(`====================================================\n====================== ${mensaje} ======================\n====================================================`);
}

//======================================================================================================================================
// Ternarios: Condiciones de if en sintaxis mas reducida es xxxx ? xxxx : xxxx . El ejemplo pseudocodigo:
//  'obj' ? 'condicion que quieres cumplir con el obj' : 'en caso que entre ? y : no se cumpla codigo a poner que quieres que haga'
//======================================================================================================================================

const auth = true;

const saldo = 1000
const pagar = 200
const tarjeta = false

separar('ejemplo 1')
auth ? ContentVisibilityAutoStateChangeEvent.log('Usuario autenticado') : console.log('No Autenticado, ir a login')


separar('ejemplo 2')
saldo > pagar ? console.log('Si puedes pagar') : tarjeta ? console.log('Puedes pagar con tarjeta') : console.log('No puedes pagar');

separar('ejemplo 3')
saldo > pagar || tarjeta ? console.log('Si puedes pagar') : console.log('No puedes pagar');


//======================================================================================================================================
// Operadores: && Es operador de corto circuito que dara un valor a truty o falsy para que en caso de que de true aha un accion
// Ejemplo de usuario logado si esta log me dice que estoy logado, si lo ponemos como terniario da pie de que caso false hagamos algo
//======================================================================================================================================
separar('&&')
auth && console.log('Usuario logado')