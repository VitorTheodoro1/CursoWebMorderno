const valores = [7.7,8.9,6.4,9.4]
console.log(valores)
console.log(valores[4])
console.log(valores[0],valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)//qtd de valores

valores.push({id :3},false,null,'teste')//array aceita varios tipos
console.log(valores)

console.log(valores.pop())//retira o ultimo elemento do array e returna ele
delete valores[0]//delete um elemento do array pelo indice
console.log(valores)

console.log(typeof valores)



