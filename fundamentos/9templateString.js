const nome = 'rebeca '
const concatenacao = 'Olá ' + nome + '!'
const template = `
    olá
    ${nome}!`


console.log(concatenacao, template)

//templates muitas linhas

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)//arrow depois veremos melhor