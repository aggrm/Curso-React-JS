
// Esta forma de exportarlas si o si al referenciarlas, tiene que ser con su nombre en las {} del js donde las quieras usar y en el html poner type module
export function sumar(n1, n2){
    return n1 + n2;
}


export function resta(n1, n2){
    return n1 - n2;
}

//Lo mismo que ne de arriba
export {
    sumar,
    restar
}