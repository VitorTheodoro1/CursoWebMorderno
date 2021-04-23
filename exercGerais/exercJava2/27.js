/*

Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/



function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto).map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)// volta para object
    }
    
// Object.entries retorna um array key value
//reverse inverte os itens de um array
// map callback para cada elemento do array



console.log(inverter({ a: 1, b: 2, c: 3})) // retornará { 1: "a", 2: "b", 3: "c"}

/*
function inverter(objeto) {
const objetoInvertido = {}
Object.entries(objeto).forEach( parChaveValor => {
const chave = 0,
valor = 1
objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
})
return objetoInvertido
}
*/