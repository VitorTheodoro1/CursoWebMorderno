/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function negativos(vetor) {
    qtd = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtd++
        }
    }
    return { qtd }
}

vetor = [2, 6, 12, 15, -5, -6, 4]
console.log(negativos(vetor))

/*
function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))
*/