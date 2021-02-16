const escola ="cod3r"

console.log(escola.charAt(4))//imprimir uma letra especifica da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//imprimi o correspondente tabela ASCII
console.log(escola.indexOf('o'))//indice(onde o digito está)
console.log(escola.substring(1))//imprimi apartir do 1
console.log(escola.substring(0,2))//imprimi apartir do zero 3 digitos
console.log('Escola '.concat(escola).concat("!"))//concat ajuda a imprimir varias coisas no mesmo console log
console.log('Escola ' + escola +("!"))
console.log(escola.replace(3,'e'))//troca o digito na posiçao 3 pelo em questao
console.log('Ana,Maria,Pedro'.split(','))//array