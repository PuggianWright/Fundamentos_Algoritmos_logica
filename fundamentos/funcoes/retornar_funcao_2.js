function retornaUmaFuncao() {
    return function () {
        return "Boa Tarde!";
    }
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());