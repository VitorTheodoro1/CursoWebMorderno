/*
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
*/

function nomeDoMes(mes){
    switch(mes) {
        case 1:
            return "janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "Mês Inválido"

    }
}



console.log(nomeDoMes(1)) // retornará "janeiro"
console.log(nomeDoMes(4)) // retornará "abril"

/*
Resolução 1
function receberNomeDoMes(numero) {
switch(numero){
case 1:
return "janeiro";
case 2:
return "fevereiro";
case 3:
return "março";
case 4:
return "abril";
case 5:
return "maio";
case 6:
return "junho";
case 7:
return "julho";
case 8:
return "agosto";
case 9:
return "setembro";
case 10:
return "outubro";
case 11:
return "novembro";
case 12:
return "dezembro";
}
}
Resolução 2
function receberNomeDoMes(numero) {
const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
return mapeamento[--numero];
}
*/