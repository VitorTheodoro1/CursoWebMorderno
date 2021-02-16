// usando a notação literal
const obj1 = {}
console.log(obj1)

//onject em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funçoes construtores

function Produto(nome, preco, desc) {
    this.nome = nome//atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)

//Object.crates

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
// um funcção famosa que retorna Objeto

const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)