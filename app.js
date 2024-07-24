let listaNumerosSorteados = [];
let tentativas = 1;
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10' );
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
        limparCampo();
        
    }
    
}   

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosNaLista = listaNumerosSorteados.length;

     if (quantidadeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

     if (listaNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio();
     } else {
       listaNumerosSorteados.push(numeroEscolhido);
       console.log(listaNumerosSorteados);
       return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciar() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


