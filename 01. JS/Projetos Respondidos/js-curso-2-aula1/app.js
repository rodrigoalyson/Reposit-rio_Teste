let listaSorteado = [];
let numMaximo = 10;
let numeroSecreto = numAleatorio();
let tentativas = 1;

function exibirTextoTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function msgInicial(){
    exibirTextoTela('h1','Jogo do número secreto');
    exibirTextoTela('p','Escolha um número entre 1 e 10:');
}

msgInicial();

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;
   if(chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let fraseTentativa = `Muito bom, você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', fraseTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
   }else {
        if(chute > numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor.');
        }else{
        exibirTextoTela('p', 'O número secreto é maior.')
        }
        tentativas++;
        limparCampo();
   }

}

// FUNCAO COM RETORNO

function numAleatorio() {
    let quantidadeDeElementosNaLista = listaSorteado.length;
    let numeroEscolhido = parseInt(Math.random()*numMaximo+1);
    if(quantidadeDeElementosNaLista==numMaximo){
        listaSorteado=[];
    }
    if(listaSorteado.includes(numeroEscolhido)){
        return numAleatorio();
    }else{
        listaSorteado.push(numeroEscolhido);
        console.log(listaSorteado);
        return numeroEscolhido;
    }
}

function iniciarNovoJogo(){
    numeroSecreto = numAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
