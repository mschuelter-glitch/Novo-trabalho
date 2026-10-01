import {aleatorio} from "./aleatorio.js"
import {perguntas} from "./pergunta.js"


const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoiniciar = document.querySelector(".iniciar-ptn")
const telainicial = document.querySelector(".tela-inicialq21    '")


let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoiniciar.addEventListener("click", iniciarJogo)

function iniciarJogo(){
    atual = 0;
    historiaFinal = ""
    telainicial.style.display = "none"
    caixaPerguntas.classlist.remove("mostrar")
    caixaAlternativas.classlist.remove("mostrar")
    caixaResultado.classlist.remove("mostrar")

}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
