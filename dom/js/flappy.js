function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)


    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {//this deixa acessivel fora do metodo
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = (x) => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) { // função construtora
    this.pares = [ // array onde vai ter dentro vários pares de barreiras.
        new ParDeBarreiras(altura, abertura, largura), // par de barreiras, a posição inicial do primeiro par de barreiras vai ser a posição logo fora do jogo e qd começar a animar ele entra no jogo.
        new ParDeBarreiras(altura, abertura, largura + espaco), // aqui o espaço é o parâmetro que define o espaço entre os pares de barreiras, a primeiro par vai ficar na largura do jogo, o segundo par vai calcular a largura mais o tamanho do espaço criando assim um distanciamento entre os pares de barreiras.
        new ParDeBarreiras(altura, abertura, largura + espaco * 2), // aqui vai inserir o espaço * 2 pra criar um novo distanciamento.
        new ParDeBarreiras(altura, abertura, largura + espaco * 3) // aqui vai inserir o espaço * 3 pra criar um novo distanciamento.
    ]

    const deslocamento = 3 // constante criada que define de quanto em quantos pixel vai ser deslocado as barreiras qd for feita a animação.
    this.animar = () => { // função criada para gerar o movimento dos pares de barreiras.
        this.pares.forEach(par => { // aqui o array de barreiras this.pares vai usar a funçao forEach() que através de uma arrow function vai varrer o pares de barreiras e vão fazer o valor de 'x' - valor do deslocamento,
            par.setX(par.getX() - deslocamento) // com isso as barreiras vão se movimentar.

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) { // aqui foi criado um loop para aproveitar os 04 pares de barreiras e reutilizá-los mudando apenas o local da abertura entre as barreiras.
                par.setX(par.getX() + espaco * this.pares.length) // aqui define a posição da barreira depois que o valor de 'x' sai do jogo(fim na posição left) e coloca 'x' novamente no jogo pelo lado direito do jogo que é onde as barreiras iniciam.
                par.sortearAbertura() // aqui chama a função sortearAbertura() para definir um novo lugar para a abertura das barreiras que estão no mesmo par.
                // com isso vão ser sempre reaproveitados os pares de barreiras e vai passar para o usuário a sensação que são barreiras novas que estão apareceram.
            }

            const meio = largura / 2 // aqui foi craida a constante meio que define o meio do jogo dividindo a largura do jogo por 2.
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio // aqui mostra se o par de barreiras cruzou o meio do jogo.
            if (cruzouOMeio) notificarPonto() // aqui mostra que se o par de barreiras tiver cruzado o meio do jogo chama a função notificarPonto().
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo / 2)
}
function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0);
}



// aqui é um teste das funções criadas acima
// const barreiras = new Barreiras(700, 1200, 200, 400) // criada constante barreiras que vai pegar o objeto instanciado 'Barreiras'(que é a função criada acima) que vai receber valores para os parâmentros altura, largura, abertura, espaco respectivamente.
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]') // aqui foi criado a constante areaDoJogo que através da função document.querySelector() vai acessar a div no html do jogo que possui o atributo personalizado 'wm-flappy'.

// areaDoJogo.appendChild(new Progresso().elemento)
// areaDoJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento)) // aqui o objeto barreiras vai pegar o array de pares de barreiras e através da função forEach() vai varrer esse array e inserir na DOM(elemento) os pares de barreiras, ou seja inserir as barreiras no jogo.
// setInterval(() => { // aqui a função setInterval() vai chamar a função animar() e executá-la a cada 20 milésimos de segundos, criando assim uma animação ao jogo.
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left

    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras => {
        if (!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }

    })
    return colidiu
}





function FlappyBird() {
    let pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        //loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()