//funnction separadora en log
function separar(mensaje) {
    console.log(`====================================================\n====================== ${mensaje} ======================\n====================================================`);
}

//Variables para los ejemplos

const disponibles = 4000
const retirar = 200

const disponibles1 = 200
const retirar1 = 200


//======================================================================================================================================
//Condicionales: true y false
//======================================================================================================================================
const auth = false
separar('Condicional de tru o false')
if(!auth){
    // Se cumple la condicion
    console.log('Acceso al sistema...');
}else{
    // No se cumple la condicion
    console.log('No tiene permiso, inicia sesion');
}

//======================================================================================================================================
//Condicionales: > o < o >= o <=
//======================================================================================================================================
separar('Condicional menor igual que o mayor igual que')
if(disponibles > retirar){
    console.log('Saldo actual es de: ' + disponibles - retirar);
}

if(disponibles1 >= retirar1){
    console.log('Saldo actual es de: ' + disponibles - retirar);
}

//======================================================================================================================================
//Condicionales: Igual no estricto (==) puede ser lo mismo a pesar de ser diferente obj 
// El igual estricto (===) necesita ser el mismo tipo de obj
//======================================================================================================================================
separar('Diferenciar entre == y el ===')
const num1 = 200
const num2 = '200'

console.log(typeof num1);
console.log(typeof num2);

if(num1 == num2){
    console.log('Si son iguales');
}

if(num1 === num2){
    console.log('No son iguales');
}