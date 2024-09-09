//let msg_input = "a leila e linda";
let contador_msg_dec = 0;
let lst_dec = [];
let lst_cod = [];

tela_inicial();

function tela_inicial(){
    limpar_campo();
    document.querySelector('h2').innerHTML = "Nenhuma mensagem encontrada";
    document.querySelector('p3').innerHTML = "Digite uma mensagem para codificar ou decodificar";
    let imagem_pensando = document.querySelector(".conteudo_direito_imagem");
    imagem_pensando.style.display = "flex";
    let botao_direito = document.querySelector(".conteudo_direito_botoes");
    botao_direito.style.display = "none";
}

function codificar(){
    let contador = 0;
    msg_input = document.querySelector('input').value;
    if(msg_input==""){
        tela_inicial();
    }else{
        let tamanho_msg_input = msg_input.length;
        for (contador = 0; contador < tamanho_msg_input; contador ++) {
            let letra = msg_input[contador];
            if (letra == "a"){
                lst_cod[contador] = "ai";
            }else if (letra == "e"){
                lst_cod[contador] = "enter";
            }else if (letra == "i"){
                lst_cod[contador] = "imes";
            }else if (letra == "o"){
                lst_cod[contador] = "ober";
            }else if (letra == "u"){
                lst_cod[contador] = "ufat";
            }else {
                lst_cod[contador] = msg_input[contador];
            }
        }
        let msg = lst_cod.join("");
        console.log(lst_cod);
        console.log(msg);
        limpar_campo();
        mensagem(msg);
        
        return msg;
    }
}

function decodificar(){
    let contador = 0;
    msg_input = document.querySelector('input').value;
    if(msg_input==""){
        tela_inicial();
    }else {
        while(contador<=msg_input.length){

            let letra1 = msg_input.slice(contador,(contador+2));
            let letra2 = msg_input.slice(contador,(contador+5));
            let letra3 = msg_input.slice(contador,(contador+4));
            
            if (letra1 =="ai"){
                lst_dec[contador_msg_dec] = "a";
                contador = contador + 2;
                contador_msg_dec = contador_msg_dec + 1;
            } else if (letra2 == "enter"){
                lst_dec[contador_msg_dec] = "e";
                contador = contador + 5;
                contador_msg_dec = contador_msg_dec + 1;
            } else if (letra3 == "imes"){
                lst_dec[contador_msg_dec] = "i";
                contador = contador + 4;
                contador_msg_dec = contador_msg_dec + 1;
            } else if (letra3 == "ober"){
                lst_dec[contador_msg_dec] = "o";
                contador = contador + 4;
                contador_msg_dec = contador_msg_dec + 1;
            } else if (letra3 == "ufat"){
                lst_dec[contador_msg_dec] = "u";
                contador = contador + 4;
                contador_msg_dec = contador_msg_dec + 1;
            } else {
                lst_dec[contador_msg_dec] = msg_input[contador];
                contador = contador + 1;
                contador_msg_dec = contador_msg_dec + 1;
            }
        }
        let msg = lst_dec.join("");
        // console.log(msg);
        limpar_campo();
        mensagem(msg);
        return msg;
    }
}

function limpar_campo(){
    document.querySelector('input').value = "";
}

function mensagem(mensagem_tela) {
    let imagem_pensando = document.querySelector(".conteudo_direito_imagem");
    imagem_pensando.style.display = "none";
    let botao_direito = document.querySelector(".conteudo_direito_botoes");
    botao_direito.style.display = "flex";
    document.querySelector('h2').innerHTML = " ";
    let campo_input_2 = document.querySelector('p3');
    campo_input_2.innerHTML = mensagem_tela;
}

function copiar_texto(){
    execComand
}
