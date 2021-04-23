//percorrer 

for(let letra of "cod3r"){
    console.log(letra)
}

const assuntosEcma = ["Map", "set", 'Promise']

for (let i in assuntosEcma) { // chaves
    console.log(i)
}

for (let i of assuntosEcma) { // valor
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['set', { abordado: true }],
    ['promise', { abordado: false }],
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){ // keys
    console.log(chave)
}

for(let chave of assuntosMap.values()){ // values
    console.log(chave)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl) // destructuring
}

const s = new Set(['a' , "b", 'c '])
for(let letra of s){
    console.log(letra)
}