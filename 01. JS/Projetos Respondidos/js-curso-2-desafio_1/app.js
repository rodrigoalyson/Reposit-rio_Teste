// 02 - HORA DO DESAFIO

let tituloDesafio = document.querySelector('h1');
tituloDesafio.innerHTML = 'Hora do desafio, está preparado!?';

// 03 - MENSAGEM NO CONSOLE 1

function botaoConsole(){
    console.log('O botão foi clicado.');
}

// 04 - MENSAGEM NO CONSOLE 2

function botaoAlerta(){
    console.log('Eu amo JS.');
}

// 05 - CIDADE DO BRASIL

function botaoPrompt(){
    let cidadeBrasil = prompt('Digite uma cidade do Brasil que visitou no último ano: ');
    alert(`Estive em ${cidadeBrasil} e lembrei de você`);
}

// 06 - SOMA

function botaoSoma(){
    let num1 = parseInt(prompt('Digite um número: '));
    let num2 = parseInt(prompt('Digite outro número: '));
    let num3 = num1 + num2;
    alert(`A soma de ${num1} com ${num2} é igual a ${num3}`);
}