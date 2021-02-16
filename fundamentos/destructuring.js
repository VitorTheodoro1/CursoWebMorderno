// novo recurso ES2015

const pessoa = {  //objeto
    nome : 'ana',
    idade: 5,
    endereco: {
        logradoura: 'rua abc',
        numero: 1000
    }
}
/*
let nomee = pessoa.nome
console.log(pessoa.nome)//forma usual
console.log(nomee)
*/

const { nome, idade } = pessoa // destructuring objeto
console.log(nome,idade)

const { nome: n,idade: i} = pessoa 
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

const { endereco : {logradouro , numero, cep}} = pessoa 
console.log(logradouro , numero, cep)