let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: '));
let nota4 = parseFloat(prompt('Digite a quarta nota: '));

function calculaMedia(n1, n2, n3, n4){
    return (nota1+nota2+nota3+nota4)/4;
}

function verificaAprovado(media){
    return media >=5 ? 'Aprovado' : 'Reprovado';
}

let med = calculaMedia(nota1, nota2, nota3, nota4);

let textoResultado = verificaAprovado(med);

alert(`Como suas notas foram: ${nota1}, ${nota2}, ${nota3} e ${nota4}`);
alert(`Você foi ${textoResultado}, com uma média de ${med}`);