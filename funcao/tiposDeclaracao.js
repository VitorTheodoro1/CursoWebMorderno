console.log(soma(3,4)) // interpretador ja tem declarado as funcoes
//console.log(sub(3, 4)) erro 

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3,4))