
/*
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativasUser = 1;

// ENQUANTO O NUMERO NAO FOR ACERTADO VAI FICAR EM LOOP
while(chute != numeroSecreto){
// se chute for igual ao número secreto
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativasUser} tentativas`);
    } else {
        if(chute>numeroSecreto){
            alert(`O numero secreto é menor que: ${chute}`);
        }else{
            alert(`O numero secreto é maior que: ${chute}`);
        }
        //tentativasUser = tentativasUser + 1;
        tentativasUser++;
    }
}
*/

// RESOLVENDO EXERCÍCIOS DA AULA 02

// AVALIANDO CONTADOR
/*
let contador = 1;

while(contador < 4){
    console.log('executando a iteração ' + contador);
    contador++;
}
*/

// CALCULANDO AS MEDIAS
/*
let qtdeNumeros = prompt('Digite a quantidade de provas: ');
let soma = 0;
let contador = qtdeNumeros;

while(contador>0){
    // A FUNCAO parseInt CONVERTE O VALOR DE STRING PARA INTEIRO
    let numero = parseInt(prompt('Digite a nota: '));
    soma += numero;
    // ESSA LINHA DE CÓDIGO FOI ADICIONADA PARA RESOLVER O LOOP INFINITO DO WILLIAN
    contador--;
}

let media = soma / qtdeNumeros;

alert('Sua média nas provas é: '+ media);
*/

// 01 - CONTATDOR CRESCENTE
/*
let contador = 1;
let numUser = 10;

while(contador <= numUser){
    console.log(contador);
    contador++;
}
*/

//02 - CONTADOR DECRESCENTE
/*
let contador = 10;
let numUser = 0;

while(contador>=numUser){
    console.log(contador);
    contador--;
}
*/

//03 - CONTAGEM REGRESSIVA COM INPUT DO USUARIO
/*
let numUser = prompt('Digite um número: ');
let contador = 0;

while(numUser>=contador){
    console.log(numUser);
    numUser--;
}
*/

// 04 - CONTAGEM PROGRESSIVA COM INPUT DO USUARIO

let numUser = prompt('Digite um número qualquer: ');
let contador = 0;

while(contador<=numUser){
    console.log(contador);
    contador++;
}