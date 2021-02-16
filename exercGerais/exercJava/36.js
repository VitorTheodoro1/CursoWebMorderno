/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.

*/

function comp1(vetor, num) {
    novo = []
    for (let i = 0; i < vetor.length; i++) {
        novo.push(vetor[i] * num)
    }
    return novo
}

function comp2(vetor, num) {
    novo = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            novo.push(vetor[i] * num)
        }
    }
    return novo
}

vetor = [2, 4, 6, 8]
console.log(comp1(vetor, 2))
console.log(comp2(vetor, 2))

/*2let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))

*/
