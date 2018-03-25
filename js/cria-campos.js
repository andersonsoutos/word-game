
var botaoJogar = document.querySelector("#btnJogar");
botaoJogar.addEventListener("click", function(){

    var palavra = document.querySelector("#palavraDigitada").value;
    //variavél que recebe a palavra que foi digitada

    var tamanhoInput = (90 / palavra.length) +"%";
    // calcula o valor de em porcentagem que será add no with do input

    for (i=0; i< palavra.length; i++){

        var letra = document.createElement("input");
        letra.id="letra"+i;
        letra.maxLength=1;
        var forca = document.querySelector("#palavraCorpo");
        forca.appendChild(letra);
        //letra.style.width=tamanhoCampo;
    };

    var campoPalavraDigitada = document.querySelector("#palavraDigitada");
    campoPalavraDigitada.classList.add("invisivel");

    console.log(campoPalavraDigitada.value);
});



/*
    
    var palavraSelecionada = document.getElementById("plavraEscolhida");
    
    
    //Variavél que recebe o input da palavra digitada.
    var palavraLetras = palavraSelecionada.value;
    //Variavél que recebe o valor 
    var numLetras = palavraLetras.length;
    // Variaveis que recebe a quantidade de letras que foram digitadas
    var i = 0;
    var x = 0;
    




    //var tamanhoCampo = (100 / numLetras);
    var tamanhoCampo = (90 / numLetras) +"%";
    //variavél para calcular a porcentagem que vai ser atribuida a cada input.

    do {
    
    var letra = document.createElement("input");
    letra.id="letra"+i;
    letra.maxLength=1;
    console.log(tamanhoCampo); 
    document.getElementById("palavraCorpo").appendChild(letra);
    document.getElementById("letra"+i).style.width=tamanhoCampo;

    i+=1;
    } while (i <= (numLetras - 1))
    
    if (plavraEscolhida.value != "") {
                alert("O numero de letras digitadas é " + numLetras);
        }
    
    function verificar () {
         var palavraSelecionada = document.getElementById("plavraEscolhida");
        //Variavél que recebe o input da palavra digitada.
        var palavraLetras = palavraSelecionada.value;
        //Variavél que recebe o valor 
        var numLetras = palavraLetras.length;
        // Variaveis que recebe a quantidade de letras que foram digitadas
        
        var PalavraSugestao = "";
        var i = 0;               
        do {
            console.log (document.getElementById("letra"+i).value);
            PalavraSugestao = PalavraSugestao + document.getElementById("letra"+i).value
            i +=1;
        } while (i <= (numLetras - 1))
        console.log (PalavraSugestao);

         if (PalavraSugestao == document.getElementById("plavraEscolhida").value) {
            console.log ("Você acertou");
        } else {
            console.log ("Você errou");
        }
    }

    */