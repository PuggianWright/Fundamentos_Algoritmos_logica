const d1 = {
    dia: 23,
    mes: 12,
    ano: 2002,
    calendario: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d2 = {
    dia: 14,
    mes: 5,
    ano: 2015,
    calendario: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d3 = {
    dia: 7,
    mes: 9,
    ano: 2022,
    calendario: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(d1.calendario())
console.log(d2.calendario())
console.log(d3.calendario())