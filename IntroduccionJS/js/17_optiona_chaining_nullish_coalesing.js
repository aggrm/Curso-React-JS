//funnction separadora en log
function separar(mensaje) {
    console.log(`====================================================\n====================== ${mensaje} ======================\n====================================================`);
}

const alumno ={
    nombre: 'Juan',
    clase: 'Programacion 1',
    aprobado: true,
    examenes:{
        examen1: 90
    }
}

//======================================================================================================================================
// Optional chaining (?) - Si existe dicho obj o propiedad de obj me haces lo que corresponda en caso de que no continua con el codigo
// sin romper lo que va a continuacion
//======================================================================================================================================

separar('Optional chaining')
console.log(alumno.examenes?.examene1);
console.log('Después de ALUMNO');

//======================================================================================================================================
// Nullish coalescing operator (??) - Operador que retorna el valor derecho cuando el lado izquierdo es undefined
//======================================================================================================================================

separar('Nullish coalescing')
const pagina = null ?? 1
console.log(pagina);

const paginaUsuario = 20 ?? 1
console.log(paginaUsuario);