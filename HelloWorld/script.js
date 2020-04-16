var agora = new Date();

const ano = document.getElementById("ano").innerHTML= agora.getFullYear();

function mostrarMensagem(){
    document.querySelector(".anuncio").classList.toggle("hide");
}