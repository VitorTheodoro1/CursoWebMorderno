/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

function receberPrimeiroEUltimoElemento(array){
    
    const prim = array.shift(); // remove o primeiro elemento e retorna ele
    const ult = array.pop(); //  remove o ultimo elemento e retorna ele
    return [prim,ult]
}


console.log(receberPrimeiroEUltimoElemento([7,14,"olá"])) // retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, 16]

/*
Resolução 1
function receberPrimeiroEUltimoElemento(elementos) {
const indiceDoPrimeiroElemento = 0
const indiceDoUltimoElemento = elementos.length - 1
const primeiroElemento = elementos[indiceDoPrimeiroElemento]
const ultimoElemento = elementos[indiceDoUltimoElemento]
return [primeiroElemento, ultimoElemento]
}
Resolução 2
function receberPrimeiroEUltimoElemento(elementos) {
const primeiroElemento= elementos.shift()
const ultimoElemento = elementos.pop()
return [primeiroElemento, ultimoElemento]
}
Resolução 3
Resoluções - Exercícios - Curso Fundamentos de Programação 6
function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
const ultimoElemento = elementosRestantes.pop()
return [primeiroElemento, ultimoElemento]
}
*/