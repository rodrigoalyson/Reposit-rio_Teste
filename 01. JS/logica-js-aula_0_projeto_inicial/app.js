
// TESTE PARA EXERCÍCIO
//let msgTeste = 'Boas';
//alert('msgTeste');

// EXERCICIO 01
//alert('Boas vindas ao nosso site!');

// EXERCICIO 02
//let nome = 'Lua';

// EXERCICIO 03
//let idade = 25;

// EXERCICIO 04
//let numeroDeVendas = 50;

// EXERCICIO 05
//let saldoDisponivel = 1000;

// EXERCICIO 06
//alert('Erro! Preencha todos os campos');

// EXERCICIO 07
//let mensagemDeErro = 'Erro! Preencha todos os campos';
//alert(mensagemDeErro);

// EXERCICIO 08
//let nomeUsuario = prompt('Usuário estranho, digite seu nome');

// EXERCICIO 09
//let idadeUsuario = prompt('Agora, quantos anos você tem?');

//EXERCICIO 10
//if(idadeUsuario>=18){
//    alert('Ja pode ser preso em!?')
//}

/*
// PRIMEIRA LINHA DE CODIGO SIMILAR AO PRINT - MOSTRA UMA MENSAGEM
alert('Boas vindas ao jogo do número secreto');

// DEFINICAO DE VARIAVEL
let numeroSecreto = 9;
console.log(numeroSecreto);

//COM O COMANDO PROMPT A GENTE MOSTRA UMA MENSAGEM, MAS ESPERAMOS UM RETORNO DO USUARIO
//OU SEJA, E UM INPUT DE DADO
let numeroChute = prompt('Escolha um número entre 1 e 30.');

if (numeroChute == numeroSecreto) {
    // CONSOLE E UMA FERRAMENTE PARA TESTE DENTRO DO CODIGO, ONDE PODEMOS MOSTRAR UMA MENSAGEM
    // EM UMA AREA OCULTA
    //console.log ('Você descobriu o número secreto (29)');
    // PARA TORNAR A MENSAGEM DINAMICA, PODEMOS COLOCAR O NOME DA VARIAVEL,
    // SEGUINDO A SINTEXE ABAIXO, PARA SEMPRE APARECER O NUMERO SECRETO
    // QUE DEFINIMOS LA EM CIMA
    alert(`Você descobriu o número secreto ${numeroSecreto}`)
}else{
    alert('ERROUUUU!!!');
}
*/

// TESTANDO O CODIGO DA TELA DA AULA

/*
alert('Bem vindo ao jogo do número secreto')

let numSecreto = 3

let numChute = prompt('Digite um numero entre 1 e 10')

console.log(numChute == numSecreto)
*/
/*
if(numChute==numSecreto){
    alert('Parabéns, você é fera!!!')
}else{
    alert('Que coisa, talvez tenha sorte na próxima. O numero era: ' + numSecreto)
}
*/

// CONDICAO PARA ADICIONAR O NUMERO QUE O USUARIO ESCOLHEU

// OPCAO 02 - PARECE A CORRETA
/*
if(numChute==numSecreto){
    alert('Parabén, acertou. O numero era: ' + numSecreto)
}else{
    alert('Errou, não é ' + numChute + ' O numero era: ' + numSecreto)
}
*/
// OPCAO 03 - NAO ESTA ERRADO, MAS ELE IMPRIMI OS DOIS NUMEROS JUNTOS
/*
if(numChute==numSecreto){
    alert('Parabén, acertou. O numero era: ' + numSecreto)
}else{
    alert('Errou, não é ' + numChute + numSecreto)
}
*/
// OPCAO 04 - OPCAO COM ERRO. VIRGULA NO LUGAR ERRADO
/*
if(numChute==numSecreto){
    alert('Parabén, acertou. O numero era: ' + numSecreto)
}else{
    alert('Errou, não é ' + numChute + ,' O numero era: ' + numSecreto)
}
*/

// TESTE DO DETRAN PARA INFORMAR SE PODE OU NAO TIRAR A CARTEIRA
/*
let idadeUsuario = prompt('Digite sua idade: ');

if(idadeUsuario>=18){
    console.log('Maior de idade.');
}else{
    console.log('Menor de idade.')
}
*/

// TESTANTO OUTRO CODIGO EXEMPLO DO CURSO
// SITE DE MILHAS - DESCONTO
/*
let milhasUser = prompt('Digite a quantidade de milhas: ');

let porcentDesconto = 0;
*/

// COM ESSAS ESTRUTURA DE CONDICAO, OS USUARIOS QUE POSSUIREM MILHAS ABAIXO DE 30000 NAO RECEBERAM DESCONTO
// ENQUANTO OS USUARIOS QUE TIVEREM MAIS DE 30000 RECEBERAM 30% AO INVES DE 20%
/*
if(milhasUser > 5000){
    porcentDesconto = porcentDesconto + 10;
}

if(milhasUser >= 30000){
    porcentDesconto = porcentDesconto + 20;
}else{
    porcentDesconto = 0;
}
alert('Você possui desconto de: ' + porcentDesconto + '%');
*/

// CORRIGINDO O ERRRO - VERSAO ALYSON

/*
if(milhasUser >= 5000){
    if(milhasUser >= 30000){
        porcentDesconto = porcentDesconto + 20;
    }else{
        porcentDesconto = porcentDesconto + 10;
    }    
}else{
    porcentDesconto = 0;
}

alert('Você possui desconto de: ' + porcentDesconto + '%');
*/

// CORRIGINDO O ERRO - VERSAO ALTERNATIVA DO CURSO
/*
if(milhasUser >= 30000){
        porcentDesconto = porcentDesconto + 20;
}else{
    if(milhasUser>=5000){
        porcentDesconto = 10;
    }
}

alert('Você possui desconto de: ' + porcentDesconto + '%');
*/

// EXERCICIOS DA ETAPA 2

//01 - SEMANA
/*
let diaSemana = prompt('Que dia da semana é hoje? ');
if(diaSemana == "Sábado"||diaSemana == "Sabado"||diaSemana == "Domingo"||diaSemana == "domingo"||diaSemana == "sabado"||diaSemana == "sábado"){
    alert('Bom final de semana. Bora tomar uma?');
}else{
    alert('Boa semana e boa sorte...');
}
*/

//02 - POSITIVO OU NEGATIVO
/*
let numUser = prompt('Digite um número qualquer: ');

if(numUser < 0){
    alert('Negativo');
}else{
    alert('Positivo');
}
*/

// 03 - PONTUAÇÃO DO JOGO
/*
let pontuacaoUser = prompt('Digite seus pontos: ');
let pontuacaoVencedor = 100;

if(pontuacaoUser == pontuacaoVencedor){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.')
}
*/

// 04 - SALDO BANCARIO
/*
let saldoBanco = 1000;
let retiradaUser = prompt('Quanto deseja sacar? ');

if(retiradaUser <= saldoBanco){
    saldoBanco = saldoBanco - retiradaUser;
    alert('Você sacou: ' + retiradaUser + '. Ficou com: '+saldoBanco + ' em caixa');
}else{
    alert('Saldo insuficiente. Saque qualquer valor inferior a: '+saldoBanco);
}
*/

// 05 - ALERTA DE BOAS VINDAS COM NOME DO USUARIO
/*
let usuario = prompt('Qual seu nome? ');

alert('Muito prazer, '+ usuario);
*/
