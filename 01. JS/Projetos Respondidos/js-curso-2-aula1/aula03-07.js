// 01 - CALCULANDO IMC
/*
let peso = parseFloat(prompt('Qual seu peso?'));
let altura = parseFloat(prompt('Qual sua altura?'));

let imc = calculeImc(peso, altura);

alert(`Seu IMC: ${imc}`);

function calculeImc(x1, x2){
    return x1/(x2*x2);
}

// 02 - CALCULANDO O FATORIAL DE UM NUMERO

let numUser = parseFloat(prompt('Digite um número e eu calculo seu fatorial: '));

let resultadoFatorial = fatorial(numUser);

alert(`O resultado do fatorial de ${numUser} é ${resultadoFatorial}`);

function fatorial(x1){
    let numFatorial = 1;
    while(x1>1){
        numFatorial = numFatorial*x1;
        x1--;
    }
    return numFatorial;
}

// 03 - CONVERTER DOLAR EM REAL

let dinDolar = parseFloat(prompt('Quantos dolares deseja converter em reais: '));

let dinReais = converterReal(dinDolar);

alert(`Você pode sacar R$ ${dinReais}`);

function converterReal(x1){
    return x1*4.80;
}
*/
// 04 - CALCULANDO A AREA E O PERÍMETRO DO RETANGULO

let salaAltura = parseFloat(prompt('Digite a altura da sala: '));
let salaLargura = parseFloat(prompt('Digite a largura da sala: '));

let perimetro = perimetroSala(salaAltura, salaLargura);

let area = areaSala(salaAltura, salaLargura);

alert(`O perímetro é: ${perimetro} e a área é: ${area}`);

function perimetroSala(x1, x2){
    return (x1*2 + x2*2);
}

function areaSala(x1, x2){
    return (x1*x2);
}

// 05 - CALCULANDO A AREA E O PERIMETRO DE UM CIRCULO

let salaRaio = parseFloat(prompt('Digite o raio da sala: '));

let periRaio = calculaSala(salaRaio, 'perimetroSala');
let areaRaio = calculaSala(salaRaio, 'areaSala');

alert(`O perímetro é: ${periRaio} e a área é: ${areaRaio}`);

function calculaSala(rai, calculo){
    if(calculo=='perimetroSala'){
        return 2*3.14*rai;
    }else{
        return 3.14*rai*rai;
    }
}

// 06 - CRIE UMA TABUADA DE UM NUMERO
/*
let numTabuada = parseFloat(prompt('Digite um número para o cálculo da tabuada: '));
let contador = 1;
while(contador<=10){
    valorTabuada = calculoTabuada(contador, numTabuada);
    console.log(`${contador} x ${numTabuada} = ${valorTabuada}`);
    contador++;
}

function calculoTabuada(x1, x2){
    return x1 * x2;
}
*/

// RESPOSTAS DO PROFESSOR

// 01
/*
function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
  }

// 02

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

// 03 

function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// 04

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

// 05

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

// 06

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);
*/