const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // cliente http


const chineses = (f) => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func,  funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual// ? entao retorna, caso contrario retorne tal
}

axios.get(url).then(responde => {
    const funcionarios = responde.data
    //console.log(funcionarios)

    //mulher chinesa com menor salario
    const func = funcionarios
    .filter(chineses)
    .filter (mulheres)
    .reduce(menorSalario)

    console.log(func)

})

/**
 *  o nodemon é uma biblioteca que uma vez instalada e 
 * executada fica monitorando o seu código para que toda vez 
 * que você salve ele execute novamente o código em questão
 * 
 * recriar pasta nodemodules e scripts package.json
 * 
 * 
 * 
 */