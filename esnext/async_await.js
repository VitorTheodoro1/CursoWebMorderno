


function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
//console.log('Executando promise...')
            resolve()

        }, tempo) // funçao setimeout espera uns segundo para executar o comando
    })
}

// esperarPor(2000)
// .then(() => console.log('executando..'))
// .then(esperarPor)
// .then(() => console.log('executando..'))
// .then(esperarPor)
// .then(() => console.log('executando..'))

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


async function executar(){
let valor = await retornarValor()

    await esperarPor(2000)
    console.log('Async Await1')
    await esperarPor(2000)
    console.log('Async Await 2')
    await esperarPor(2000)
    console.log('Async Await 3')
}

executar()