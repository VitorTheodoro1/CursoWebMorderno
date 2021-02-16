const valor = 'Global'

function minhaFuncao(){ // carrega consigo o contexto na qual foi introduzida
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()