const cliente = {
    codigo: 12345,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            {nome: 'Hospital X', muitoProximo: true},
            {nome: 'Shopping Y', muitoProximo: false},
        ]
    },
    nomeFilhos: ['Bia', 'Clara', 'Gabriel']
};

console.log(cliente['endereco']['logradouro'])
console.log(cliente.endereco.logradouro)
console.log(cliente.endereco.pontosRef[0].muitoProximo)