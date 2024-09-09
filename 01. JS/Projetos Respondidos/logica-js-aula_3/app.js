
// CODIGO PRONTO DA AULA 03
/*
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
*/

// MEU CODIGO PARA A AULA 03
/*
alert('Seja muito bem vindo(a) ao jogo do número secreto! :)');

let chute = prompt('Digite um número entre 1 e 100.');
let numSecre = parseInt(Math.random()*100+1);
// TESTANDO COMO GERAR NUMEROS ALEATORIOS ENTRE 1 E 3

//let numSecre = parseInt(Math.random()*3+1);

let tentativa = 1;

while(chute != numSecre){
    if(chute==numSecre){
        break;
    }else{
        tentativa++;
        if(chute>numSecre){
            alert(`É um valor menor que ${chute}`);
            chute = prompt('Digite outro valor: ');
        }else{
            alert(`É um valor maior que ${chute}`);
            chute = prompt('Digite outro valor: ');
        }
    }
}
*/
// USANDO O OPERADOR TERNÁRIO, PODEMOS REDUZIR AS LINHAS DE CÓDIGO ABAIXO
/*
if(tentativa==1){
    alert(`Parabéns, você acertou o número secreto (${numSecre}) com ${tentativa} tentativa`);
}else{
    alert(`Parabéns, você acertou o número secreto (${numSecre}) com ${tentativa} tentativas`);
}
*/

// COM OPERADOR TERNARIO
/*
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número secreto (${numSecre}) com ${tentativa} ${palavraTentativa}`);
*/

// EXERCICIOS DA AULA 04

// 01 - MENSAGEM COM CONSOLE.LOG

console.log('Seja bem vindo ao ambiente secreto!');

// 02 - NOME NO CONSOLE

let nomeUser = prompt('Qual seu nome? ');
console.log(`Usuário ${nomeUser}, você não deveria estar aqui...`);

// 03 - MENSAGEM COM ALERT

alert(`Usuário ${nomeUser}, seja muito bem vindo!`);

// 04 - LINGUAGEM DE PROGRAMAÇÃO

let linguagemProg = prompt('Qual a linguagem de programação você mais gosta?');
console.log(`E por sinal você ainda prefere ${linguagemProg} como linguagem!? Acho que vou apagar o systems32 do seu computador`);

// 05 - CALCULADORA NO CONSOLE (SOMA)

let valor1 = parseInt(prompt('Qual a sua idade?'));
let valor2 = parseInt(prompt('Qual a idade do seu pai?'));
let resultado = valor1 + valor2;
// ESSE RESULTADO DE SOMA APENAS JUNTA OS DOIS NUMEROS E NAO SOMA
// resultado = valor1 + valor2;

console.log(`Se somar ${valor1} com ${valor2} teremos ${resultado}`);

// 06 - CALCULADORA NO CONSOLE (SUBTRAÇÃO)

resultado = valor1 - valor2;
console.log(`Agora, se você diminuir ${valor1} de ${valor2}, teremos ${resultado}`);

// 07 - MAIOR DE IDADE

if(valor1>=18){
    console.log('Maior de idade.');
}else{
    console.log('Menor de idade');
}

// 08 - ANALISANDO NUMERO INSERIDO +, - OU 0

let numUser = prompt('Digite um número: ');
if(numUser>=0){
    if(numUser==0){
        alert(`${numUser} é neutro`);
    }else{
        alert(`${numUser} é positivo`);
    }
}else{
    alert(`${numUser} é negativo`);
}

// 09 - WHILE NO CONSOLE

let contador = 10;
while(contador>0){
    console.log(contador);
    contador--;
}

// 10 - NOTA DE PROVA

let nota = prompt('Você lembra a última nota que tirou em matemática? Quanto foi?');

if(nota>=7){
    alert(`Com um ${nota} você estaria aprovado.`);
}else{
    alert(`Com um ${nota} você estaria reprovado.`);
}

// 11 - NUMERO ALEATORIO

let numAlea = Math.random();
console.log(numAlea);

// 12 - NUMERO ALEATORIO INTEIRO ENTRE 1 E 10

numAlea = parseInt(numAlea*10 + 1);
console.log(numAlea);

// 13 - NUMERO ALEATORIO INTEIRO ENTRE 1 E 1000

numAlea = numAlea*100;
console.log(numAlea);
