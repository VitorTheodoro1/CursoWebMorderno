const moduloA = require('../../moduloA') // usar path tem que trocar as barras
//../ sai e para entrar /
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
    res.write('s')
    res.end()

}).listen(8080) // codigo tem que estar rodando