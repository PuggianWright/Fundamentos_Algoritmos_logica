// Objeto data
// Atributos: dia, mes e ano
// metodo: exibir -> "dia/mes/ano"

const data = {
    dia: 23,
    mes: 12,
    ano: 2002,
    calenadario: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.calenadario())
console.log(data.mes)