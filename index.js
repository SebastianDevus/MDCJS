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

});

function calculaMDC(nr1, nr2) {
    
}