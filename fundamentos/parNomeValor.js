//par nome/valor

const saudacao = 'opa' // contexto lexico 1

function exerc(){
    const saudacao = 'Falaa'// contetxo lexico 2
    return saudacao
}

// objetos sao grupos aninahdos de pares nome/valor
const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero:123
        }
}

console.log(saudacao)
console.log(exerc())
console.log(cliente)
