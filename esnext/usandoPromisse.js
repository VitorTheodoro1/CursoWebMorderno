//com promisse

const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let resultado = ''
    
            res.on('data', dados => {// listener de eventos /  caso tenha algum dado faça isso
                resultado+= dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))// JSON.parse() recebe uma string JSON e a transforma em um objeto JavaScript
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}
/*
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
*/

//O método Promise.all(iterable) retorna uma única Promise 
//que resolve quando todas as promises no argumento iterável 
//forem resolvidas ou quando
//o iterável passado como argumento não contém promises.
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))//depois que acabar/then faça isso
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
.catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))