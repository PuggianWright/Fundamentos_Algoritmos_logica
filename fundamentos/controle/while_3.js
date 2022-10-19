const futuro = Date.now() + 2000; // 10000 = segundos
let quantidade = 0;

while(Date.now() < futuro) {
    quantidade++
}

console.log('Qtde: ' + quantidade);
