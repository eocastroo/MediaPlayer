
const data = {

    frontend : 'edwin',
    backend : 'angel ',
    desing : 'andres'
}


const trabajador = Object.entries(data)
console.log(trabajador)
console.log(trabajador.length)

//Object values
// El cual nos devuelve los valores de un objeto a un arreglo

const data = {

    frontend : 'edwin',
    backend : 'angel ',
    desing : 'andres'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

// El padStart tranformar el string
// Esto no sirve para realizar estructura de elemento 
// una lista de menu

const string = 'hello'
console.log(string.padStart(10, 'super'))
console.log(string.padEnd(8,'---'))
console.log('foot'.padEnd(9,'----'))



// Realizamos una promesa 

const helloWord = () => {
    return new Promise((resolver, reject) =>{
        (true)
         ? setTimeout(() => resolver('Hello Word'), 3000)
         :reject( new error ('Test de error '))
    })
}

const helloAsinc = async () => {
    const hello = await helloWord();
    console.log(hello)
}

helloAsinc()

const anotherFuncion = async () => {

    try{
        const hello = helloWord()
        console.log(hello)

    }   catch (error){

        console.log(error)
    }
}

anotherFuncion()