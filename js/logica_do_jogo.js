//Pega o valor do input digitado pelo adiversário e armazena em uma variavel. 
var btnPalavraDigitada = document.querySelector("#btnJogar");

//Adicona um evento ao botão Jogar
btnPalavraDigitada.addEventListener("click", function(){
    palavraDigitada = document.querySelector("#palavraDigitada");
    console.log("A palavra digitada foi: " + palavraDigitada.value);
    //Função que vai cariar os campos para a forca.
    camposPalavraSecreta()
});

var btnEnviar = document.querySelector("#btnEnviar");

//Adiciono uma evento click ao botão enviar

btnEnviar.addEventListener("click", function(){
    x = 0;
    //pego o valor do campo digitado
    palavraSugerida = document.querySelector("#palavraSugerida").value;
    //For para armazenar cada letra em uma parte do Array
    
    for (i=0; i < palavraSugerida.length; i++) {
        letrasDigitadas[i] = palavraSugerida[i];
    };

    do {
        if (letrasDigitadas[i]==palavraDigitada[x]) {
            i++;
            letrasCertas = letrasCertas + "|" + palavraDigitada[x];
        };
    } while(i < palavraSugerida.length);

    if (palavraDigitada.value == palavraSugerida) {
        alert("Você acertou, a palavra digitada era " + palavraDigitada)
    } else {
        console.log("errou");
    
    };

    console.log(letrasCertas)
});

// função que criar campos para a forca
function camposPalavraSecreta(){
    i = 0;
    
    var camposForca = palavraDigitada.value;
    var forca = document.querySelector("#forca");

    do {
        var texto = document.createElement("span");
        texto.textContent = "_ ";
        forca.appendChild(texto);
        i++;
    } while (i < camposForca.length);
 
}
