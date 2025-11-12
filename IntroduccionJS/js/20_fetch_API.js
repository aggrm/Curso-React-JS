//Fecth API con promesas lo puedes dejar con un const o fuera de un const

const url = 'https://jsonplaceholder.typicode.com/comments'
const consultaAPI = () => {
    fetch(url)
        .then((response) =>{
            if(response.ok){
                return response.json()
            }
            throw new Error('Hubo un error...')
        })
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
}
consultaAPI()

//Async await para convertir el codigo sincrono
const consultaAPIAsync = async () => {
    try {
        
        const response2 = await fetch(url)
        if(!response2.ok){
            throw new Error('Hubo un error...')
        }
        const data2 = await response2.json()
        console.log(data2);

    } catch (error) {
        console.log(error.message);
    }
}
consultaAPIAsync()