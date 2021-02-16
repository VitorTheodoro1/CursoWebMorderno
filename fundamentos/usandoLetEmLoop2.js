const funcs =[]


for(let i =0;i<10;i++){
    funcs.push(function(){
        console.log(i)


    })
}
//let com escopo em bloco fará funcionar
funcs[2]()
funcs[8]()