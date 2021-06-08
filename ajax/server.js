
/**
 * dentro da pasta
 * npm i // cria o arquivo package.json, que descreve algumns scripts e dependencias
 * 
 * body-parser // rensponsavel por fazer o parse, ler os dados do corpo da requisiçao
 * e deixar disponivel pra gente no backend
 * 
 * express // O Express é um framework para aplicativo da web do Node.js mínimo e 
 * flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
 * 
 * multer // fazer o exemplo do upload
 * 
 * nodemon // monitorando os arquivos e restartar o servidor
 * 
 * npm i dnv ele criou as dependencias
 * 
 */
const bodyParser = require('body-parser')// fazer o parse do body
const express = require('express')//
const app = express()// instaciando o express

// agora os middlewares, funcao que e executando quando uma requisiçao chegar
app.use(express.static('.'))// dentro da pasta, sirva os arquivos estaticos, html,dados,css...// prover os arquivos estaticos
app.use(bodyParser.urlencoded({ extended: true }))// se vier formato se submit de formulario, este codigo vai transformalo em objeto
app.use(bodyParser.json())// se vier json esse codigo vai ser aplicaado, para transforma-lo em objeto

const multer = require('multer')//para o upload
const storage = multer.diskStorage({//funçao que recebe objeto, esse objeto serve para configurar a pasta, e eprsonalizar o nome
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {//nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end("Occoreu um erro")

        }
        res.end('Concluido com sucesso')
    })
})




app.post('/formulario', (req, res) => { // precisa do bodyparser configurado
    res.send({
        ...req.body,//nome,sobrenome..
        id: 1

    })
})

app.get('/parOuImpar', (req, res) => {
    // receber dados do front-end
    // req.body 
    // req.query
    // req.params
    const par = parseInt(req.query.num) % 2 === 0
    res.send({ // 
        resultado: par ? 'par' : 'impar'
    })
})

//app.get('/teste', (req, res) => res.send('OK'))// funçao middleware quando o /teste for invocado apartir de uma requisiçao get
app.listen(8080, () => console.log('Executando..'))//estartando o servidor