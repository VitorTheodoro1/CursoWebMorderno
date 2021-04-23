/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false
*/

function maiorOuIgual(num1,num2){

    if(typeof num1 != typeof num2){
        return false
    }
    else if(num1>=num2){
        return true
    } else{
        return false
    }

}


console.log(maiorOuIgual(0, 0)) // retornará true
console.log(maiorOuIgual(0, "0")) // retornará false
console.log(maiorOuIgual(5, 1)) // retornará false


/*

function maiorOuIgual(primeiro, segundo) {
if(typeof primeiro != typeof segundo) return false
return primeiro >= segundo
}
*/
