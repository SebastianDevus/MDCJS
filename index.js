const campoNr1 = document.getElementById("inputNr1");
const campoNr2 = document.getElementById("inputNr2");
const campoDeExibicao = document.getElementById("exibeMDC");
const botaoCalcula = document.getElementById("botaoCalcula");

const numeros = {
    nr1: null,
    nr2: null
}

// Armazenando valores dos inputs nas propriedades do objeto "numeros"
campoNr1.addEventListener("change", event => {
    numeros.nr1 = Number(event.target.value);
});

campoNr2.addEventListener("change", event => {
    numeros.nr2 = Number(event.target.value);
});

botaoCalcula.addEventListener("click", event => {
    let valorMDC = calculaMDC(numeros.nr1, numeros.nr2);

    campoDeExibicao.innerHTML = `O MDC de ${numeros.nr1} e ${numeros.nr2} é igual a ${valorMDC}`;
});

function calculaMDC(dividendo, divisor) {
    do {
        resto = dividendo % divisor;
        dividendo = divisor;
        divisor = resto;
    } 
    while (resto != 0);

    return dividendo;
}