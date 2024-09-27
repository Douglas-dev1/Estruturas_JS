/**
 * FAÇA UM ALGORITMO QUE CALCULE A MEDIA DE 4 NOTAS DE UM ALUNO
 * E APRESENTE SE O MESMO FOI APROVADO, ESTÁ EM RECUPERAÇÃO OU
 * FOI APROVADO MEDIA 7 APROVADO, MEDIA ENTRE 7 E 5 RECUPERAÇÃO
 * E MENOR QUE 5 REPROVADO
 */
const divRoot = document.getElementById("root")
const nota1 = Number(prompt("Digite o primeiro nota"));
const nota2 = Number(prompt("Digite o segunda nota"));
const nota3 = Number(prompt("Digite o terceira nota"));
const nota4 = Number(prompt("Digite o quarta nota"));

const media = ( nota1 + nota2 + nota3 + nota4 ) / 4;

let mensagem = "";

console.log(nota1);
console.log(nota2);
console.log(nota3);
console.log(nota4);

console.log(media);

if(media >= 7){
    mensagem = "Aluno aprovado! - Média = " + media;
}
else if(media >= 5){
    mensagem = "Aluno em recuperação! - Média = " + media;
}
else{
    mensagem = "Aluno reprovado! - Média = " + media;
}

divRoot.appendChild(document.createTextNode(mensagem));
document.body.appendChild(document.createTextNode(mensagem))