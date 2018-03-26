//Crie um evento que pega o valor do input digitado pelo adiversário e armazena numa variavel. 
var btnPalavraDigitada = document.querySelector("#btnJogar");
btnPalavraDigitada.addEventListener("click", function(){
    palavraDigitada = document.querySelector("#palavraDigitada");
    console.log(palavraDigitada.value);
    camposPalavraSecreta()
});

//Evento que comprara as palavras digitadas pelo usuário
var btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener("click", function(){
    palavraSugerida = document.querySelector("#palavraSugerida");
    
    if (palavraDigitada.value == palavraSugerida.value) {
        console.log("Acertou")
    } else {
        console.log("errou");
        letrasCertas();
    }
});

function camposPalavraSecreta(){
    i = 0;
    var palavra1 = String(palavraDigitada.value);
    //var palavra2 = String(palavraSugerida.value);
    var campos = "";
    
    do {
        campos = campos + "X ";
        i++;
    } while (i < palavra1.length);

    var placar = document.querySelector("#placar");
    var texto = document.createElement("p");
    texto.textContent = campos;
    placar.appendChild(texto);
}

function letrasCertas (){
    var palavra1 = String(palavraDigitada.value);
    var palavra2 = String(palavraSugerida.value);
    i = 0;
    x = 0;
   

  /*  console.log(palavra1[0]);
    console.log(palavra2[0]);
*/

    do {
        if (palavra1[i] == palavra2[x]) {
            console.log("letra certa" + palavra2[x]);
            x++;
        } else {
            i++;
        }
       
       
        
    } while (i < palavra1.length)

/*
    if (palavra1[0] == palavra2[0]) {
        console.log("letras Iguais");
    } else {
        console.log("letras Diferentes");
    }
*/
}