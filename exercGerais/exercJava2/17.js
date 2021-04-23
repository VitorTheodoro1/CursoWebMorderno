/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60

*/

function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)// for each faz algo para cada elemento
    return soma
}



console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60

/*
Resolução 1
Resoluções - Exercícios - Curso Fundamentos de Programação 9
function somarNumeros(numeros) {
const quantidadeDeNumeros = numeros.length
return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

Resolução 2
function somarNumeros(numeros) {
let soma = 0
numeros.forEach(numero => soma += numero)
return soma
}

Resolução 3
function somarNumeros(numeros) {
const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
return soma
}
*/