
let nota = 10.2;

switch (Math.ceil(nota)) { // ceil arredonda um número para o maior número
    case 10: case 9: case 8: case 7: // pode organizar tanto dessa maneira como a de baixo.
        console.log('Parabens!');
        break;
    case 6: case 5:
        console.log('Recuperação')
    case 4: 
    case 3: 
    case 2:
        console.log("Reprovado!");
        break;
    case 1: 
    case 0:
        console.log('Reprovado com força!');
        break
    default:
        console.log('Nota inválida!')
}

console.log('Fim!')