let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem;

let resultadoE = "#1 (AND) - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);
// && significa o 'e'

let resusltadoOU = '#2 (OR) - Vai pro shopping? ';
resusltadoOU += temDinheiro || estaEnsolarado;
console.log(resusltadoOU);
// || significa o 'ou'
// se usar apenas um sinal como & ou |, ele trabalhará com números binarios.

console.log(true ^ true);
console.log(true ^ false);
console.log(false ^ true);
console.log(false ^ false);

console.log(true !== true);
console.log(true != false);
console.log(false != true);
console.log(false != false);

console.log('Operador unario não verdadeiro = ' + !true);
console.log('Operador unario não falso =  ' + !false)

// '^' e '!=' são parecidos, porem o primeiro trabalha com binário 0 e 1 e outro com true e false.

