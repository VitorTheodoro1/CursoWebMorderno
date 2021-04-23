const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // remove o ultimo elemento 
console.log(pilotos)

pilotos.push('Verstappen')//add um elemento na ultima posicao
console.log(pilotos)

pilotos.shift()  // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //add um ellemento na primeira psiçao
console.log(pilotos)

//splice pode adcionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas','Massa')
console.log(pilotos)
//remover
pilotos.splice(3,1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array 
console.log(algunsPilotos1)  

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)