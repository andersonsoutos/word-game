segundos = 7;
    function contagem_tempo(){	                 
        document.contador.segundos.value = segundos; 
        segundos = segundos - 1;
        
        if (segundos == -1) {
        segundos = 0;
        }   
                    
        timerID = setTimeout("contagem_tempo()",1000);   
    }     
    