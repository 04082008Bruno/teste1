let resposta = document.getElementById('resposta');

let computador;
let jogador;

let numminimo = 1;
let nummaximo = 90;
let dif = nummaximo - numminimo;
let aleatoreo = Math.random();
computador = numminimo + Math.trunc(dif * aleatoreo);

function Adivinhar() {
    jogador = prompt("Qual o seu palpite? ");


if (computador == jogador) {
    resposta.innerHTML += "<p> Parabéns!! você acertou a idade sorteada! " + computador + "</p>";
    document.getElementById("botao").style.visibility = "hidden";
    } 
else if(computador < jogador){
    resposta.innerHTML += "<p>Você falou" + jogador + " . A minha idade é um pouco menor!</p>";
    }
  else if(jogador < computador) {
    resposta.innerHTML += "<p>Você falou" + jogador + " . A minha idade é um pouco maior!</p>";
    }
}