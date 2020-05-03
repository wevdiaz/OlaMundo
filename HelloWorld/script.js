var agora = new Date();

const ano = document.getElementById("ano").innerHTML= agora.getFullYear();

function mostrarMensagem(){
    document.querySelector(".anuncio").classList.toggle("hide");
}

var hora = agora.getHours();


if (hora >= 18) {
    var frase = document.querySelector(".frase");frase.textContent="Boa Noite";
    var tempo = document.querySelector(".tempo");tempo.textContent=" 🌙";
} 
else if (hora > 12) {
    var frase = document.querySelector(".frase");frase.textContent="Boa Tarde";
    var tempo = document.querySelector(".tempo");tempo.innerHTML=" ☀";
}
else {
    var frase = document.querySelector(".frase");frase.textContent="Bom Dia";
    var tempo = document.querySelector(".tempo");tempo.innerHTML=" 🌥";
}