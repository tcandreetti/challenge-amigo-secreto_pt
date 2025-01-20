//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaAmigos = document.getElementById('listaAmigos');
const nomeInput = document.getElementById('amigo');
const resultado = document.getElementById('resultado');
const botaoReiniciar = document.getElementById('reiniciar');
const botaoSortear = document.getElementById('sortear');
const botaoAdicionar = document.getElementById('adicionar');

let listaDeAmigosSorteados = [];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;}

// Evento para adicionar amigo com a tecla enter
nomeInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        adicionarAmigo();
        nomeInput.value = '';
        exibirTextoNaTela('h2',"Digite o nome dos seus amigos: ");
    }
});

//Mostra a Lista de Amigos inseridos
function mostrarLista(campo){
    const novoItem = document.createElement('li');
    novoItem.classList.add('name-item');
    novoItem.textContent = campo;
    listaAmigos.appendChild(novoItem);;
    exibirTextoNaTela('h2',"Digite o nome dos seus amigos: ")
}

function apagarLista(){
    listaAmigos.innerHTML = '';
}

function sortearAmigo() {
    //vamos evitar que você e seu amigo sorteado sejam a mesma pessoa
    listaDeAmigosSorteados.splice(0,1);
    // sorteio do amigo
    nomeSorteado = listaDeAmigosSorteados[Math.floor(Math.random() * listaDeAmigosSorteados.length)];
    apagarLista();
    resultado.textContent = `O amigo sorteado foi: ${nomeSorteado}`;
    botaoSortear.disabled = true;
    botaoAdicionar.disabled = true;
    return nomeSorteado;
}

//Verifica se um nome já foi inserido previamente
function contemNome(listaAmigos, nome) {
    return listaAmigos.includes(nome);
}

//Adiciona um amigo na lista
function adicionarAmigo(){   
    let amigo = nomeInput.value;
    if (amigo == ''){
        alert('O campo não pode estar vazio');
        return;
    }
    else{
        if(contemNome(listaDeAmigosSorteados,amigo)){
            alert('Este amigo já foi inserido');
            nomeInput.value = '';
            }
        else {
            listaDeAmigosSorteados.push(amigo);
            mostrarLista(amigo);
            nomeInput.value = '';
            }
           
        }
        
    }
function reiniciar(){
    resultado.innerHTML=''
    nomeInput.value= '';
    botaoAdicionar.disabled = false;
    botaoSortear.disabled = false;
    exibirTextoNaTela('h2',"Digite o seu nome para começar: ")
    listaDeAmigosSorteados = [];
}

exibirTextoNaTela('h2',"Digite o seu nome para começar: ")
