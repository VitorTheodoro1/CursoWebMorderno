const fs = require('fs')//module file system
/**
 * Ler arquivos
Criar arquivos
Atualizar arquivos
Deletar arquivos
Renomear arquivos
 */

const caminho = __dirname + '/arquivo.json'//"caminho" __dirname quer dizer que esta no mesmo diretorio/pasta

//sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')//ler uma rquivo de forma sincrona
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8',(err,conteudo) =>{//ler um arquivo de forma assincrona
    const config = JSON.parse(conteudo)//transforma em objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err,arquivos) =>{//ler um diretorio/pasta
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})

/**
 * ler informaçoes de arquivos
 */