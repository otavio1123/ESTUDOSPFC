const telaInicial = document.querySelector("#tela-inicial");
const telaSimulacao = document.querySelector("#tela-simulacao");
const cardsProfessores = document.querySelectorAll(".professor-card");
const botaoIniciar = document.querySelector("#iniciar-simulacao");
const botaoVoltar = document.querySelector("#voltar-inicio");
const botaoMostrarResposta = document.querySelector("#mostrar-resposta");
const botaoMarcarErro = document.querySelector("#marcar-erro");
const botaoMarcarAcerto = document.querySelector("#marcar-acerto");
const botaoProxima = document.querySelector("#proxima-pergunta");
const respostaContainer = document.querySelector("#resposta-container");
const acoesAvaliacao = document.querySelector("#acoes-avaliacao");

const campos = {
    professor: document.querySelector("#meta-professor"),
    categoria: document.querySelector("#meta-categoria"),
    dificuldade: document.querySelector("#meta-dificuldade"),
    pergunta: document.querySelector("#pergunta-atual"),
    resposta: document.querySelector("#resposta-atual"),
    progresso: document.querySelector("#progresso-pergunta"),
    barraProgresso: document.querySelector("#barra-progresso"),
    acertos: document.querySelector("#total-acertos"),
    erros: document.querySelector("#total-erros")
};

let professorSelecionado = null;
let filaPerguntas = [];
let indiceAtual = 0;
let acertos = 0;
let erros = 0;
let respostaAvaliada = false;

function embaralhar(lista) {
    const copia = [...lista];

    for (let indice = copia.length - 1; indice > 0; indice -= 1) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
        [copia[indice], copia[indiceAleatorio]] = [copia[indiceAleatorio], copia[indice]];
    }

    return copia;
}

function filtrarPerguntas() {
    if (professorSelecionado === "Todos") {
        return perguntas;
    }

    return perguntas.filter((item) => item.professor === professorSelecionado);
}

function criarNovaFila() {
    filaPerguntas = embaralhar(filtrarPerguntas());
    indiceAtual = 0;
}

function selecionarProfessor(card) {
    professorSelecionado = card.dataset.professor;

    cardsProfessores.forEach((item) => {
        const selecionado = item === card;
        item.classList.toggle("is-selected", selecionado);
        item.setAttribute("aria-checked", String(selecionado));
    });

    botaoIniciar.disabled = false;
}

function prepararAvaliacao() {
    respostaAvaliada = false;
    respostaContainer.classList.add("hidden");
    acoesAvaliacao.classList.add("hidden");
    botaoMostrarResposta.classList.remove("hidden");
    botaoMarcarErro.disabled = false;
    botaoMarcarAcerto.disabled = false;
    botaoMarcarErro.classList.remove("is-selected");
    botaoMarcarAcerto.classList.remove("is-selected");
    botaoProxima.disabled = true;
}

function exibirPergunta() {
    const perguntaAtual = filaPerguntas[indiceAtual];
    const numeroPergunta = indiceAtual + 1;
    const totalPerguntas = filaPerguntas.length;

    campos.professor.textContent = perguntaAtual.professor;
    campos.categoria.textContent = perguntaAtual.categoria;
    campos.dificuldade.textContent = perguntaAtual.dificuldade;
    campos.pergunta.textContent = perguntaAtual.pergunta;
    campos.resposta.textContent = perguntaAtual.resposta;
    campos.progresso.textContent = `Pergunta ${numeroPergunta} de ${totalPerguntas}`;
    campos.barraProgresso.style.width = `${(numeroPergunta / totalPerguntas) * 100}%`;

    prepararAvaliacao();
}

function iniciarSimulacao() {
    if (!professorSelecionado) {
        return;
    }

    acertos = 0;
    erros = 0;
    campos.acertos.textContent = "0";
    campos.erros.textContent = "0";
    criarNovaFila();
    telaInicial.classList.add("hidden");
    telaSimulacao.classList.remove("hidden");
    exibirPergunta();
}

function mostrarResposta() {
    respostaContainer.classList.remove("hidden");
    acoesAvaliacao.classList.remove("hidden");
    botaoMostrarResposta.classList.add("hidden");
}

function avaliarResposta(acertou) {
    if (respostaAvaliada) {
        return;
    }

    respostaAvaliada = true;

    if (acertou) {
        acertos += 1;
        campos.acertos.textContent = String(acertos);
        botaoMarcarAcerto.classList.add("is-selected");
    } else {
        erros += 1;
        campos.erros.textContent = String(erros);
        botaoMarcarErro.classList.add("is-selected");
    }

    botaoMarcarErro.disabled = true;
    botaoMarcarAcerto.disabled = true;
    botaoProxima.disabled = false;
    botaoProxima.focus();
}

function carregarProximaPergunta() {
    if (!respostaAvaliada) {
        return;
    }

    indiceAtual += 1;

    if (indiceAtual >= filaPerguntas.length) {
        criarNovaFila();
    }

    exibirPergunta();
}

function voltarAoInicio() {
    professorSelecionado = null;
    filaPerguntas = [];
    indiceAtual = 0;
    acertos = 0;
    erros = 0;
    respostaAvaliada = false;

    cardsProfessores.forEach((card) => {
        card.classList.remove("is-selected");
        card.setAttribute("aria-checked", "false");
    });

    botaoIniciar.disabled = true;
    telaSimulacao.classList.add("hidden");
    telaInicial.classList.remove("hidden");
    cardsProfessores[0].focus();
}

cardsProfessores.forEach((card) => {
    card.addEventListener("click", () => selecionarProfessor(card));
});

botaoIniciar.addEventListener("click", iniciarSimulacao);
botaoVoltar.addEventListener("click", voltarAoInicio);
botaoMostrarResposta.addEventListener("click", mostrarResposta);
botaoMarcarErro.addEventListener("click", () => avaliarResposta(false));
botaoMarcarAcerto.addEventListener("click", () => avaliarResposta(true));
botaoProxima.addEventListener("click", carregarProximaPergunta);
