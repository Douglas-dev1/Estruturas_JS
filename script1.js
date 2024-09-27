const divRoot= document.getElementById("root");

const number = Number(prompt("Digite o primeiro valor"));

const resto = number % 2;

let mensagem = "";

 console.log(resto);

 if(resto === 0){
    mensagem  = `${number} é par`
 }
 else{
    mensagem  = `${number} é impar`
 }

 divRoot.appendChild(document.createTextNode(mensagem));