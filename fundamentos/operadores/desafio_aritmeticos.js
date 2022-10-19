const fusaoC = 0; const ebulicaoC = 100;
// Temperaturas de fusao e ebulicao de Celsius

const fusaoF = 32; const ebulicaoF = 212;
// Temperaturas de fusao e ebulicao de Farenheit

let F = 73;
let C = (((F - fusaoF)/(ebulicaoF - fusaoF)) 
        * ebulicaoC 
        + " Celsius");

console.log(C);