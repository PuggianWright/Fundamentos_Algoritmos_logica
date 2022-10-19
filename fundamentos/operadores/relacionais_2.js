let a = 1;
let b = '1';
let c = "1"

console.log(a == b);
// Dará true pois ele está comparando os conteudos.
console.log(a === b);
// '===' é estritamente igual, comaparando os conteudos e os tipos; dará false.
console.log(b === c)

console.log(a != b)
// diferente apenas.
console.log(a !== b)
// Estritamente diferentes.

// É recomendar usar igualdade estrita.