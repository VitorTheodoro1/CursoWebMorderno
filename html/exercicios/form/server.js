const express = require('express')
//O Express é um framework para aplicativo da web do Node.js mínimo e flexível que 
//um conjunto robusto de recursos para aplicativos web e móvel.
const app = express()
//const bodyParser = require('body-parser')


app.use(express.urlencoded({ extented: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens usuário Incluído</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens Usuário Alterado </h1>')
})

app.listen(3003)
//O método server.listen () cria um ouvinte na porta ou caminho especificado.
