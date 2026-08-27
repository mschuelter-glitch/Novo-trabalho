const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPergunta = document.querySelector(".caixa-pergunta")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")





const perguntas = [
    {
        enunciado: "Um colega mostra um vídeo falso criado por IA. Parece real. O que você faz?",
        alternativas: [
            {
                texto: "Compartilho para saber o que acham.",
                afirmacao: "Percebeu que vídeos falsos podem enganar muitas pessoas."
            },
            {
                texto: "Procuro saber se o vídeo é verdadeiro.",
                afirmacao: "Aprendeu a verificar informações antes de compartilhá-las."
            }
        ]
    },
    {
        enunciado: "Seu celular começa a mostrar conteúdos que você gosta. Como você reage?",
        alternativas: [
            {
                texto: "Acho útil receber essas sugestões.",
                afirmacao: "Passou a usar recomendações digitais para descobrir novos conteúdos."
            },
            {
                texto: "Quero saber como isso funciona.",
                afirmacao: "Começou a pesquisar sobre algoritmos e privacidade."
            }
        ]
    },
    {
        enunciado: "Sua escola faz uma feira de tecnologia. Seu grupo precisa criar uma solução. O que vocês fazem?",
        alternativas: [
            {
                texto: "Criamos um sistema para objetos perdidos.",
                afirmacao: "Descobriu como a tecnologia pode resolver problemas simples."
            },
            {
                texto: "Criamos um guia para alunos novos.",
                afirmacao: "Percebeu que tecnologia também pode ajudar outras pessoas."
            }
        ]
    },
    {
       enunciado: "Um colega sugere usar reconhecimento facial na escola. O que você pensa?",
        alternativas: [
            {
                texto: "Pode ajudar na segurança.",
                afirmacao: "Percebeu que novas tecnologias podem trazer benefícios."
            },
            {
                texto: "Precisamos pensar nos riscos.",
                afirmacao: "Aprendeu que tecnologia também envolve ética e privacidade."
            }
        ]
    },
    {
         enunciado: "Na feira, outro grupo usa IA para fazer quase tudo. O que você valoriza?",
        alternativas: [
            {
                texto: "Um projeto bonito e impressionante.",
                afirmacao: "Percebeu que resultados rápidos podem ser muito tentadores."
            },
            {
                texto: "Entender como o projeto funciona.",
                afirmacao: "Entendeu que a tecnologia não substitui o conhecimento humano."
            }
        ]
    },
];
let atual = 0
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta(){
     if (atual >= perguntas.length){
        mostrarResultado()
    return
    }
    perguntaAtual = perguntas[atual]
    caixaPergunta.textContent =perguntaAtual
    caixaAlternativa.textContent = "";
    mostrarAlternativa()
}
function mostrarAlternativa(){
    for (const alternativa of perguntaAtual.alternativa)
        const botaoAlternativa = document.createElement("button"){
        botaoAlternativas.textContent = alternativa.texto
        botaoAlternativa. addEventListener ("click", ()=> respostaSelecionada(alternativa))
        caixaAlternativa.appendChild(botaoAlternativas)
}
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao[
        historiaFinal += afirmacoes + " "
        atual++
        MostraPergunta()
    ]
}
function mostrarResultado(){
    caixaPergunta.textContent="em 2049 ..."
    textoResultado.textContent = historiaFinal
    caixaAlternativa.textContent = "";
}

mostraPergunta()