//funnction separadora en log
function separar(mensaje) {
    console.log(`====================================================\n====================== ${mensaje} ======================\n====================================================`);
}


//Varables para todos los ejemplos. se iterara sobre estos arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
const numeros = [10, 20, 30];

//======================================================================================================================================
//Metodos de arrays: filter - Filtra cualquier numero, palbra u objeto 
//======================================================================================================================================
separar('filter');
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')
console.log(nuevoArray);

const resultado = numeros.filter(numero => numero !== 10)
console.log(resultado);

//======================================================================================================================================
//Metodos de arrays: includes - si estas x cosa ya sea con mayor que o x palabra u objeto
//======================================================================================================================================
separar('includes');
const resultado2 = numeros.includes(20)

console.log(resultado2);

//======================================================================================================================================
//Metodos de arrays: some - Devuelve si al menos uno cumple la condicion. 
// Se puede usas para ver si hay elementos en vez de comprobar vacio.
//======================================================================================================================================
separar('some');
const resultado3 = numeros.some(numero => numero > 15)

if (resultado3) {
    console.log(resultado3);
} else {
    console.log(resultado3);
}

//======================================================================================================================================
//Metodos de arrays: find - devuelve el primer elemento encontrado que cumpla la condicion
//======================================================================================================================================
separar('find');
const resultado4 = numeros.find(numero => numero > 15)

console.log(resultado4);

//======================================================================================================================================
//Metodos de arrays: every - Retornara true o false si todos cumple la condicion
//======================================================================================================================================
separar('every');
const resultado5 = numeros.every(numero => numero > 5)
console.log(resultado5);

//======================================================================================================================================
//Metodos de arrays: reduce - Retornara un acumulado total
//======================================================================================================================================
separar('reduce');
const resultado6 = numeros.reduce((total, numero) => {
    console.log('El total es: '  + total);
    console.log('El numero es: ' + numero);

    return total + numero
}, 0)

console.log('Total al final es: ' + resultado6);


