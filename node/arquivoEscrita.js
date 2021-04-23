const fs = require('fs')
/**
 * Ler arquivos
Criar arquivos
Atualizar arquivos
Deletar arquivos
Renomear arquivos
 */

const produto = {
    nome: 'Celular',
    preco: 1235.99,
    desconto: 0.15
}
                                     //stringfy converte um ojeto para string
fs.writeFile(__dirname + '/arquivoGerrado.json',JSON.stringify(produto), err =>{
    //writeFile(escrever arquivo) ( local / oque / callback)
    console.log(err || 'Arquivo salvo!!')
})