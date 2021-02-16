/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function oquesao(vetor) {
    let par = []
    let impar = []
    let pares = 0
    let impares = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par.push(vetor[i])
            pares++
        }
        else {
            impar.push(vetor[i])
            impares++
        }
    }
    console.log("pares :", par)
    console.log("impares: ", impar)
    console.log(pares, " numeros pares e ", impares, " numeros impares")

}

vetor = [2, 6, 7, 9, 8, 14, 13, 1]
oquesao(vetor)


/*
function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)
*/