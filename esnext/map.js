// estrutura dinamica chave/valor -> objeto
//esnext trouxe uma nova map
//você nunca terá um registro duplicado
// chaves de qualquer tipo, ou seja, objetos, arrays e em 
//seguida, valores atrelados a essas chaves "complexas".

const tecnologias = new Map()
tecnologias.set('react', { framework : false})
tecnologias.set('angular', { framework : true})

console.log(tecnologias.react)
console.log(tecnologias.framework)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Funçao'],
    [{},'Objeto' ],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
