const contadorA = require('./instanciaUnica') // cash
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//factory: funçao que retorna um bojeto
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)