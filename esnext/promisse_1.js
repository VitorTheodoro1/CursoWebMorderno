const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase() // funçao que transforma em minuscula


new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Carlos', 'Bia'])
})
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)