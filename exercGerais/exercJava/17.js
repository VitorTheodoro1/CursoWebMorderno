/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function calcularAumento(plano, salario) {
    switch (plano) {
        case 'A': case "a":
            total = salario + (salario * 0.1)
            return total
        case 'B': case "b":
            total = salario + (salario * 0.15)
            return total
        case 'C': case "c":
            total = salario + (salario * 0.20)
            return total
        default:
            return "Plano Inválido"
    }
}

console.log(calcularAumento("a", 1000))
console.log(calcularAumento("b", 1000))
console.log(calcularAumento("C", 1000))

/*

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
*/