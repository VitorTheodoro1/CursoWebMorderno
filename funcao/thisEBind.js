const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    },
    amar(){
        console.log('teste')
    }
    
}

pessoa.falar()

const falar = pessoa.falar
falar()// conflito entreparadigmas : funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)//amarrar objeto
falarDePessoa()