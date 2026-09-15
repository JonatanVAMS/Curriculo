// =====================================================
// CURRÍCULO / PORTFÓLIO - JAVASCRIPT
// Funcionalidades básicas de interatividade
// =====================================================

// 1. Saudação personalizada usando o botão e innerText.
const btnSaudacao = document.getElementById("btnSaudacao");
const mensagemSaudacao = document.getElementById("mensagemSaudacao");

btnSaudacao.addEventListener("click", function () {
    mensagemSaudacao.innerText =
        "Olá! Obrigado por visitar meu currículo. Seja muito bem-vindo!";
});

// 2. Coleta o nome do formulário e exibe uma mensagem dinamicamente.
const formContato = document.getElementById("formContato");
const respostaFormulario = document.getElementById("respostaFormulario");

formContato.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if (nome !== "") {
        respostaFormulario.innerText =
            `Obrigado, ${nome}! Seu contato foi registrado para demonstração.`;
        formContato.reset();
    }
});

// 3. Contador de visitas usando localStorage.
let visitas = Number(localStorage.getItem("visitasCurriculo")) || 0;
visitas++;

localStorage.setItem("visitasCurriculo", visitas);

document.getElementById("contadorVisitas").innerText = visitas;

// Atualiza o ano automaticamente.
document.getElementById("anoAtual").innerText = new Date().getFullYear();

// 4. Canvas: gráfico ilustrativo das áreas de competência.
const canvas = document.getElementById("graficoHabilidades");
const ctx = canvas.getContext("2d");

const habilidades = [
    { nome: "Manutenção", valor: 90 },
    { nome: "Elétrica", valor: 85 },
    { nome: "Automação", valor: 70 },
];

const margemEsquerda = 115;
const inicioY = 30;
const espacamento = 48;
const larguraMaxima = 260;

ctx.font = "14px Arial";

habilidades.forEach((habilidade, index) => {
    const y = inicioY + index * espacamento;
    const largura = (habilidade.valor / 100) * larguraMaxima;

    // Nome da habilidade.
    ctx.fillStyle = "#eef5ff";
    ctx.fillText(habilidade.nome, 5, y + 15);

    // Fundo da barra.
    ctx.fillStyle = "#16283c";
    ctx.fillRect(margemEsquerda, y, larguraMaxima, 22);

    // Barra de progresso.
    ctx.fillStyle = "#2da8ff";
    ctx.fillRect(margemEsquerda, y, largura, 22);

    // Valor.
    ctx.fillStyle = "#eef5ff";
    ctx.fillText(`${habilidade.valor}%`, margemEsquerda + larguraMaxima + 10, y + 16);
});
