/*
12) Faça um algoritmo que calcule o fatorial de um número.

*/


function fatorial(numero) {
    let res = 1
    for (let i = numero; i != 0; i--) {
        res = res * i
    }
    return res
}

console.log(fatorial(0))

/*
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
*/