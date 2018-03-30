//Pega o valor do input digitado pelo adiversário e armazena em uma variavel. 
var btnPalavraDigitada = document.querySelector("#btnJogar");
//Adicona um evento ao botão Jogar
btnPalavraDigitada.addEventListener("click", function(){

    palavraDigitada = document.querySelector("#palavraDigitada").value;
    //Função que vai cariar os campos para a forca.
    camposPalavraSecreta();

});

var btnEnviar = document.querySelector("#btnEnviar");
//Adiciono uma evento click ao botão enviar
btnEnviar.addEventListener("click", function(){
    numeroTentativas++;
    var pS = 0;
    var pD = 0;
    palavraSugerida = document.querySelector("#palavraSugerida").value;

    // FOR QUE VAI PERCORER TODAS AS LETRAS DA PALAVRA SUGERIDA
   for (pS=0; pS < palavraSugerida.length; pS++) {
       //FOR QUE VAI PERCORER TODAS AS LETRAS DA PALAVRA DIGITADA
       for (pD=0; pD < palavraDigitada.length; pD++) {
        //CONDIÇÃO QUE COMPARA A UMA LETRA DA PALAVRA SUGERIDA COM TODAS DA PALVRA DIGITADA.
            if (palavraSugerida[pS] == palavraDigitada[pD]) {
            //FUNÇÃO QUE SUBISTITUI AS LETRAS NA FORCA
                posicaoLetra (pD,palavraSugerida[pS]);
            }
        }

   }
console.log(numeroTentativas);
});

// FUNÇÃO QUE CRIA OS CAMPOS PARA FORCA E É CHAMADA NO BOTÃO JOGAR
function camposPalavraSecreta(){
    i = 0;
    
    var camposForca = palavraDigitada;
    var forca = document.querySelector("#forca");

    do {
        var texto = document.createElement("span");
        texto.id="letra"+i;
        texto.textContent = "_ ";
        forca.appendChild(texto);
        i++;
    } while (i < camposForca.length);
 
}

// FUNÇÃO QUE RECEBE AS LETRA CERTA E A POSIÇÃO E SUBISTITUI
function posicaoLetra (posicao, letra){
    var letraAdivinhada = document.querySelector("#letra"+posicao);
    letraAdivinhada.textContent = letra;
}

//DEFININDO O CAMPO DE PALAVRAS OU LETRAS

var checkboxP = document.querySelector("#opcPalavra");
checkboxP.addEventListener("click", function(){
    var arriscarPalavra = document.querySelector("#palavraSugerida");
    if (checkboxP.checked == true ) {
    console.log("evento click ok");
    arriscarPalavra.maxLength = 50;
    arriscarPalavra.classList.add("campoPalavra");
    arriscarPalavra.classList.remove("campoLetra");
} else {
    console.log("evento desclicado")
    arriscarPalavra.maxLength = 1;
    arriscarPalavra.classList.remove("campoPalavra");
    arriscarPalavra.classList.add("campoLetra");
}

});


