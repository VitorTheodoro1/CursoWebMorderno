/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function contas(num1, num2) {

    let soma = num1 + num2
    let subt = num1 - num2
    let mult = num1 * num2
    let div = num1 / num2
    console.log('soma = ' + soma + '\nsubt = ' + subt + '\ndivis = ' + div + '\nmult = ' + mult)
    //console.log('soma = ' , soma , '\nsubt = ' , subt , '\ndivis = ' , div, '\nmult = ',mult)

}

contas(5, 5)

/*
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
*/
