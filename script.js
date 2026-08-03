const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Como será a inteligência artificial no futuro?",
    alternativas: [
      {
        texto: "A IA será mais avançada e ajudará em várias áreas.",
        afirmacao: "afirmação",
      },
      {
        texto: " A IA poderá melhorar serviços e pesquisas.",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      "A inteligência artificial vai substituir os seres humanos no trabalho?",
    alternativas: [
      {
        texto:
          "A IA poderá substituir algumas tarefas repetitivas.",
        afirmacao: "afirmação",
      },
      {
        texto:
          "A IA também poderá criar novas oportunidades de trabalho.-+.",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      " A IA poderá pensar como um ser humano?",
    alternativas: [
      {
        texto:
          " A IA poderá resolver problemas complexos.",
        afirmacao: "afirmação",
      },
      {
        texto:
          "A IA continuará sendo diferente da inteligência humana.",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      "Como a IA pode ajudar na medicina do futuro?",
    alternativas: [
      {
        texto:
          "Poderá ajudar a identificar doenças.",
        afirmacao: "afirmação",
      },
      {
        texto: "Poderá ajudar no desenvolvimento de tratamentos.",
        afirmacao: "afirmação",
      },
    ],
  },
  {
    enunciado:
      "A IA pode melhorar a educação?",
    alternativas: [
      {
        texto:
          "A IA poderá criar aulas personalizadas.",
        afirmacao: "afirmação",
      },
      {
        texto:
          "Poderá ajudar estudantes com dúvidas.",
        afirmacao: "afirmação",
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", function () {
      atual++;
      mostraPergunta();
    });
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal = afirmacoes;
  atual++;
  mostraPergunta();
}

mostraPergunta();
