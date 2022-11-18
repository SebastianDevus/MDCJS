let numeros = {
    nr1: null,
    nr2: null
}

// Adiciona variáveis para armazenar os elementos necessários
let campoNr1 = null;
let campoNr2 = null;
let campoDeExibicao = null;
let botaoCalcula = null;

// Executa setup quando o DOM carrega
document.addEventListener("DOMContentLoaded", setup());

function setup() {
    // Busca e armazena elementos necessários
    campoNr1 = document.getElementById("inputNr1");
    campoNr2 = document.getElementById("inputNr2");
    campoDeExibicao = document.getElementById("exibeMDC");
    botaoCalcula = document.getElementById("botaoCalcula");

    // Armazenando valores dos inputs nas propriedades do objeto "numeros"
    campoNr1.addEventListener("change", () => numeros.nr1 = Number(campoNr1.value));
    campoNr2.addEventListener("change", () => numeros.nr2 = Number(campoNr2.value));

    // Ao clicar no botao, chama a função calculaMDC e exibe o resultado
    botaoCalcula.addEventListener("click", () => {
        let valorMDC = calculaMDC(numeros.nr1, numeros.nr2);

        if (valorMDC != "DividiuPorZero") { 
            // Mensagem normal
            campoDeExibicao.innerText = `O MDC de ${numeros.nr1} e ${numeros.nr2} é igual a ${valorMDC}.`;
        }
    });
}

function calculaMDC(dividendo, divisor) {
    // Caso o divisor ou o dividendo forem falsos || 0 || nulos, não execute laço de divisão para evitar erros
    if (!divisor || !dividendo) {
        return "DividiuPorZero";
    }
    else {
        do {
            resto = dividendo % divisor;
            dividendo = divisor;
            divisor = resto;
        }
        while (resto != 0);

        return dividendo;
    }
}
