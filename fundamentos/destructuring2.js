const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5,n6 = 0] = [10,7,9,8] // destructuring array
console.log(n1,n3,n5,n6)

const [,[, nota]] = [[,8,8],[9,6,8]]
console.log(nota)


/*

const valores = [7.7,8.9,6.4,9.4]
const[c1,c2, , c3] = valores
console.log(c1,c2,c3)
console.log(valores[3])// for para imprimir todos?

*/