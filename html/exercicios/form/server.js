const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extented : true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>PArabens</h1>')
})

app.listen(3003)
