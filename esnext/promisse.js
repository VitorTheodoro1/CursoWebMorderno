function falarDepoisDe(segundos, frase) {
    return new Promise( (resolve, reject ) => { // promisse
            setTimeout(() => {
                resolve(frase) // chama a funçao then
            }, segundos*1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
.then(frase => frase.concat('!?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))