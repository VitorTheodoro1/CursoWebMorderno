//funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2,10,4,7)
imprimirSoma()


//funcao com retorno
function soma(a = 3, b = 1){
    return a +b
}


console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
