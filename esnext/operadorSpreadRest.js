//operador ...rest(juntar)/spread(espalhar)
//usar rest com parâmetros de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.98}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar spread com array 
const grupoA = ['Joao','Pedro','Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)