// #1 Função COM Parâmetro e COM Retorno
function somar(a, b) {
    return a + b
}

let resultado = somar(30, 56)
console.log(resultado)
console.log(somar(30, 56))

// #2 Função com COM parâmetro e SEM Retorno
function exibirMultiplicação(a, b) {
    console.log(a * b);
}

exibirMultiplicação(10, 21)

// #3 Função com SEM parâmetro e COM Retorno
function retornarDataAtual() {
    return new Date()
}

console.log(retornarDataAtual()) //em milissegundos.

// #4 Função com SEM parâmetro e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date().getUTCDay())
}
exibirHoraAtual()