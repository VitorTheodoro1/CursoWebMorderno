console.log(this===global)//false
console.log(this===module)//false
console.log(this===module.exports)//true
console.log(this===exports)//true

function logThis(){
    console.log('Dentro de uma funcao...')
    console.log(this === exports)//false dentro de uma funçao
    console.log(this === module.exports)//false
    console.log(this===global)//true dentro e uma funçao
    this.perigo = 'rrrr'
    console.log(global.perigo)

}

this.perigo = '...'
console.log(exports.perigo)

logThis() 


/**
 * this fora de funçao e igual a exports e module.exports
 * ja dentro this === global
 * 
 */