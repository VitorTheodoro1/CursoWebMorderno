/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

*/

function calcExpoente(base, expoente) {
    let total = Math.pow(base, expoente)
    return total
}

console.log(calcExpoente(5, 3))

/*
function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))

*/