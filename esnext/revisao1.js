// let e const 
{
    var a = 2
    let b = 3
    console.log(b)//escopo de bloco // nao funciona fora
}
console.log(a)

//Template String

const produto = 'iPad'
console.log(`${produto}`)
//template string voce consegue quebrar em mais de uma linha
//vantagem


//destructuring
//possibilita extrair dados de arrays ou objetos em variáveis distintas.
const [l, e, ...tras] = "cod3r"
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const { idade, nome} = {nome: 'Ana', idade :9}
console.log(idade, nome)