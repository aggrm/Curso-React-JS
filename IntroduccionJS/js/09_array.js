//Array o arreglos

const tecnologias = [20, 30, 40]

console.table(tecnologias)

console.log(tecnologias)

console.log(tecnologias[1])


const tecnologias1 = [20, 30, 40, true, "React.js"]

console.log(tecnologias1);

/*============================
    Trabajar arreglos metodos
==============================*/

//Indices
const lenguajes = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
lenguajes[4] = 'Nest.js'
lenguajes[5] = 'Angular.js'
lenguajes[10] = 'Java'

console.table(lenguajes);


//Añadir de manera dinamica nuevos indices
const lenguajess = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
//No uasr push con react
lenguajess.push('Nest.js')

//Recomendable destructuring
const arreglo = [...lenguajess, 'Nest.js']
console.table(arreglo);


//Eliminar obj del array pero muta el obj
lenguajes.shift()

//Sin mutar el obj original
const lenguajes1 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const arreglo2 = lenguajes1.filter(function(tech){
    if(tech !== 'HTML'){
        return tech
    }
})
console.table(arreglo2);

//Cambiar elementos de valor si mutar el array original
const lenguajes2 = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const arreglo3 = lenguajes2.map(function(tech){
    if(tech !== 'Node.js'){
        return "Nest.js"
    }else{
        return tech
    }
})
console.table(arreglo2);