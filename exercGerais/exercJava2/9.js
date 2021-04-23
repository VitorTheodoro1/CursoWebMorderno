/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]

*/

function repetir(oque,quanto){
    const array = []
    for(let i =0;i<quanto;i++){
        array.push(oque)
    }
    return array
}

console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3)) // retornará [7, 7, 7]



//fill preenche os valores do array a aprtir de um indice inicial a um indice final
/*
Resolução 1
function repetir(item, quantidade) {
let resultado = []
for (let i = 0; i < quantidade; i++)
resultado.push(item)
return resultado
}
Resolução 2
Resoluções - Exercícios - Curso Fundamentos de Programação 5
function repetir(item, quantidade) {
return Array(quantidade).fill(item)
}
*/