const funcs =[]


for(var i =0;i<10;i++){
    funcs.push(function(){
        console.log(i)


    })
}
//function em for o var nao funcioan direito
funcs[2]()
funcs[8]()