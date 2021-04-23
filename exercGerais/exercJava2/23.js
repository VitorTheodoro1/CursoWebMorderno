/*

Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
📕 Considere que todas as palavras só são separadas por um espaço.
Exemplos:
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/

function contarPalavras(string){
    /*
    let qtd = 1
    for(let i=0;i<string.length;i++){
        if(string[i] == " "){
            qtd++
        }
    }
    return qtd
    */
    const palavras = string.split(" ")
    return palavras.length
}



console.log(contarPalavras("Sou uma frase")) // retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")) // retornará 5

/*
Resolução:
function contarPalavras(frase){
const palavras = frase.split(" ")
return palavras.length
}
*/