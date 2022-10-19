// PI = 3.142592 (por constantes em letra maiuscula)
// PI * raio * raio
// Exponencaição se faz com ' ** ';
// Para constantes matemáticas, basta acrescentar 'Math.(constante desejada)';
// caso necessário reescrever algo const, terá mque mudar para let.

const PI = 3.141592
const raio = 10;
let areaCirc = PI * (raio ** 2);

console.log("Área da Circunferência =" ,areaCirc ,("m2"));

areaCirc = Math.PI * (raio ** 2);
console.log("Área da Circunferência =" ,areaCirc ,("m2"))