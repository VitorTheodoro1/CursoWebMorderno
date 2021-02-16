/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
*/

function media(vetor) {
    qtd = vetor.length
    let total = 0
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
    }

    return total / qtd
}

vetor = [20, 10]
console.log(media(vetor))

/*
function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))
*/