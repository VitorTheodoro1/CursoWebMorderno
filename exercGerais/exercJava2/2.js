function converterIdadeEmAnosParaDias(idade){
    total = 0
    for(let i=0;i<idade ;i++){
        total += 365
    }
    return total

}


console.log(converterIdadeEmAnosParaDias(25)) // retornará 9125
console.log(converterIdadeEmAnosParaDias(70)) // retornará 25550

/*
Resolução:
function converterIdadeEmAnosParaDias(idadeEmAnos) {
const diasDoAno = 365
return diasDoAno * idadeEmAnos
}
*/