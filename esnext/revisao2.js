// Arrow Function
const soma = a => a+3//sem paranteses quando so recebe um parametro
console.log(soma(3))//sem corpo o return e implicito

const somaa = (a,b) => a+b//comparanteses quando recebe mais de um parametro
console.log(somaa(2,3))////sem corpo o return e implicito

const somaaa = (a,b) => {
    a+b
}//com paranteses quando recebe mais de um parametro
console.log(somaaa(2, 3))//como tem corpo vai ter undefined

const somaaaa = (a,b) => {
    return a+b
}//comparanteses quando recebe mais de um parametro
console.log(somaaaa(2, 3))//corpo tem que colocar return


// Arrow function (this)
const lexico1= () => console.log(this=== exports)
// em funçao tradicional this apontaria para global
const lexico2 =  lexico1.bind({})
//O método bind() cria uma nova função que, quando chamada, 
//tem sua palavra-chave this definida com o valor fornecido
lexico1()
lexico2()

// parametro default
function log(texto = "Node") {
    console.log(texto)
}

log()

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total+= n)
    return total
}
console.log(total(2,3,4,5))

