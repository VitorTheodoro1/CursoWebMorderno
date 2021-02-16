function Pessoa(){
    this.idade

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa