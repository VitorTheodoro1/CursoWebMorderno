const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
// JSON formato de dados,nao e algo executado, formato textual
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a": 1.7,"b": "string" , "c": true,"d": {} , "e": [] }'))

