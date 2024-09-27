/*CRIE UM PROGRAMA QUE LEIA DOIS VALORES NUMERICOS DO USUARIO E EM SEGUIDA,CALCULE SUA SOMA, 
E EM SEGUIDA VALIDE SE O RESULTADO DA SOMA É PAR OU IMPAR, MOSTRE A OPERAÇÃO O VALOR RESULTANTE E SE É PAR OU IMPAR*/

/*TO DO*/
/**
 * 1 - OBTER DADODS
 * 2 - SOMAR OS VALORES
 * 3 - FAZER A OPERAÇÃO DE RESTO
 * 4 - VALIDAR O RESULTADO
 * 5 - MOSTRAR NA TELA O RESULTADO FINAL
 */

/*VARS*/
const valorA = Number(prompt("Digite o primeiro valor"));
const valorB = Number(prompt("Digite o segundo valor"));

const resAB = valorA + valorB;

let mensagem;
let mensagem1;

const restoAB = resAB % 2;

console.log(valorA, valorB);
console.log(resAB);

if (!restoAB) {
    mensagem = "O numero é par!";
}
else {
    mensagem = "O numero é ímpar!";
}

const percentual = (valorA * 0.10) / 2;

if (percentual >= 10) {
    mensagem1 = "Percentual OK";
}
else {
    mensagem1 = "Percentual alterado";
}

const resultadoSoma = document.createElement("h2");
resultadoSoma.textContent = valorA + " + " + valorB + "=" + resAB;

const resultadoResto = document.createElement("h2");
resultadoResto.textContent = resAB + " % " + 2 + "=" + restoAB;

const mensagemFinal = document.createElement("h2");
mensagemFinal.textContent = mensagem;

const mensagemFinal1 = document.createElement("h2");
mensagemFinal1.textContent = mensagem1;



const divRoot = document.getElementById("root")
divRoot.appendChild(resultadoSoma);
//divRoot.appendChild(document.createElement("br")); // Adiciona uma quebra de linha
divRoot.appendChild(resultadoResto);
//divRoot.appendChild(document.createElement("br")); // Adiciona uma quebra de linha
divRoot.appendChild(mensagemFinal);
divRoot.appendChild(mensagemFinal1);
//divRoot.appendChild(document.createTextNode(mensagem))




