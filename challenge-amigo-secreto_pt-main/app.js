//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; 


function adicionarAmigo(){
    let nome = document.querySelector ('input').value;
    if (nome == ''){
        alert ('coloque um nome valido por favor');
    }else{
    amigos.push(nome);
    console.log (amigos);
    listarNomes();
    document.querySelector ('input').value ='';
}
}






function sortearAmigo(){
    if (amigos.length == 0) {
        alert(' sem amigo não da pra fazer amigo secreto né');
    }else {
        escolherNome();
}
}  
function ocultar(){
    nada = document.getElementById('resultado');
    nada.innerHTML= '';
}






function listarNomes(){
    let mostrarNomes = document.getElementById('listaAmigos');
    mostrarNomes.innerHTML = (amigos);
}



function escolherNome(){
  numero = parseInt(Math.random() * amigos.length);
   console.log (numero);
   let escolhido = amigos[numero];
   let nomeNaTela = document.getElementById('resultado');
   nomeNaTela.innerHTML = (escolhido);
   zeraNome = document.getElementById('listaAmigos');
   zeraNome.innerHTML = '';
   

   
    amigos.splice(numero, 1);
    console.log (amigos);
}