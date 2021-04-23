/* ExercíciosCrie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
*/

function cumprimentar(string){
  
    return "Olá, " +string +"!"
}

const x = ['Leonardo']
console.log(cumprimentar(x))
//join O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string
//concat ria um novo array unindo todos os elementos que foram passados como parâmetro


/*
Resolução 1
function cumprimentar(nome) {
const saudacao = "Olá"
return [saudacao, nome].join(', ').concat("!")
}

Resolução 2
function cumprimentar(nome) {
return "Olá, " + nome + "!"
}

Resolução 3
function cumprimentar(nome) {
return `Olá, ${nome}!`
}
*/