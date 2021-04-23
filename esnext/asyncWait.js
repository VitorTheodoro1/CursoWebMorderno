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

// recurso do ES8
// Objetivo de simplificar o uso de promisses
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto assync function 

obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))
