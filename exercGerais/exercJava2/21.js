/*
Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/



function menorNumero(array){
    menor = array[0]
    for(let i =0;i<array.length;i++){
        if(array[i]<menor){
            menor = array[i]
        }
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15

/*
Resolução 1
function menorNumero(numeros) {
let menor = numeros[0]
for (let i in numeros)
if (numeros[i] < menor)
menor = numeros[i]
return menor
}
Resolução 2
function menorNumero(numeros) {
return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
Resolução 3
function menorNumero(numeros) {
return Math.min(...numeros);
}
*/