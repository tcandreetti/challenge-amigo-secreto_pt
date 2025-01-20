//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosSorteados = [];
let nome = ''
const listaAmigos = document.getElementById('listaAmigos');
const nomeInput = document.getElementById('amigo');

nomeInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        adicionarAmigo();
    }
});

function mostrarLista(campo){
    const novoItem = document.createElement('li');
    novoItem.classList.add('name-item');
    novoItem.textContent = campo;
    listaAmigos.appendChild(novoItem);
}

function sortearAmigoSecreto(listaDeAmigos) {



}

function contemNome(listaAmigos, nome) {
    return listaAmigos.includes(nome);
}

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


let resposta = prompt("Você irá participar deste amigo secreto? \n Responda SIM ou NÃO")
resposta = resposta.toUpperCase();
if(resposta =='SIM'){
    let campo = prompt("Digite o seu nome para começar:");
    listaDeAmigosSorteados.push(campo);
    mostrarLista(campo);
}

