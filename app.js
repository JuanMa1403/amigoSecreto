// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo) {

        amigos.push(nombreAmigo);
        listaAmigos.innerHTML = "";

        for (let index = 0; index < amigos.length; index++) {
            let item = document.createElement('li');
            item.textContent = amigos[index];
            listaAmigos.appendChild(item);
        }

        limpiarInput();

    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function sortearAmigo() {

    if (amigos.length != 0) {
        let index = Math.floor(Math.random() * amigos.length);
        let amigoElegido = amigos[index];
        resultado.innerHTML = `El amigo secreto es ${amigoElegido}`;
    }else{
        alert("Por favor, inserte nombre de amigos a la lista.");
    }

}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

