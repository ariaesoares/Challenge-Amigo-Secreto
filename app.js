//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
   let nome = document.getElementById("amigo").value;
    console.log(nome);
    if (nome) {
        listaAmigos.push(nome)
        document.getElementById("amigo").value = "";
        atualizarLista();
    
    } else { 
        alert("Por favor, insira um nome válido");
    }
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    })

}

function sortearAmigo() {
    if (listaAmigos.length <2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    } else { 
    let amigosSorteados = [...listaAmigos];
    amigosSorteados.sort(() => Math.random() -0.5);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = "O seu amigo(a) secreto(a) é: " + amigosSorteados[0];
    resultado.appendChild(li);
    }
    



    }




//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
   let nome = document.getElementById("amigo").value;
    console.log(nome);
    if (nome) {
        listaAmigos.push(nome)
        document.getElementById("amigo").value = "";
        atualizarLista();
    
    } else { 
        alert("Por favor, insira um nome válido");
    }
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    })

}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    } else { 
    let amigosSorteados = [...listaAmigos];
    amigosSorteados.sort(() => Math.random() -0.5);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = "O seu amigo(a) secreto(a) é: " + amigosSorteados[0];
    
    }
    



    }



