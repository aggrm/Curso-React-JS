//funnction separadora
function separar(){
    console.log('======================================================');
}

//======================================================================================================================================
//function declaration - se puede uasr cuadno quieras, no es necesario inicializar paara usar puesto que no se le asigna a una variable
//======================================================================================================================================
function suma() {
 console.log(1 + 1);
};

suma();

function sumas(num1, num2){
    console.log(num1 + num2);
}

sumas(10, 50)
//======================================================================================================================================
//funnction expresion - si lo quieres usar, primero se ha de inicializar porque es al fin y al cabo una variable 
//======================================================================================================================================
const sumar = function (num1 = 0, num2 = 0){
    console.log(num1 + num2);
}
separar()
separar()
sumar(10,20)
sumar(300,20)
sumar(90)

//======================================================================================================================================
//funnction arrow - si lo quieres usar, primero se ha de inicializar porque es al fin y al cabo una variable
//si la funcion es legible en una line te puedes evitar las {} 
//======================================================================================================================================
const flecha = (num1, num2) => {
    console.log(num1 + num2);
}

separar()
separar()
flecha(30, 20)

//======================================================================================================================================
//function con retorno de valores
//======================================================================================================================================
function sumarRetornoFuncion(num1, num2){
    return num1 + num2
}

const sumarRetornoExpresion = function (num1 = 0, num2 = 0){
    return num1 + num2;
}
const sumarRetornoFlecha = (num1, num2) => num1 + num2

const resultfunction = sumarRetornoExpresion(22,40)
const resultExpresion = sumarRetornoExpresion(1,40)
const resultArrow = sumarRetornoFlecha(500,40)

separar()
console.log('resultfunction:>> ', resultfunction);
console.log('resultExpresion :>> ', resultExpresion);
console.log('resultArrow :>> ', resultArrow);

