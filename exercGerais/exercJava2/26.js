/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"

*/




function removerVogais(string){
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

   
    vogais.forEach( vogal => string = string.replace(vogal,''))
    return string
}

console.log(removerVogais("Cod3r")) // retornará "Cd3r"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts"
/*

Resolução 1
function removerVogais(frase) {
const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
vogais.forEach( vogal => frase = frase.replace(vogal, '') )
return frase
}

Resolução 2
function removerVogais(frase) {
return frase.replace(/[aeiou]/ig, '')
}


*/
