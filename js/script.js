
    /*********** Definición de la clase cubo ************/
    class Carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.url=arg2;
        }

      }
      
    //Creación de los objetos
    var oro1 = new Carta(1, "images/1Oros.png");       
    var oro2 = new Carta(2, "images/2Oros.png");       
    var oro3 = new Carta(3, "images/3Oros.png");       
    var oro4 = new Carta(1, "images/1Oros.png");       
    var oro5 = new Carta(2, "images/2Oros.png");       
    var oro6 = new Carta(3, "images/3Oros.png");       
    var oro7 = new Carta(1, "images/1Oros.png");       
    var oro10 = new Carta(2, "images/2Oros.png");       
    var oro11 = new Carta(3, "images/3Oros.png");       
    var oro12 = new Carta(1, "images/1Oros.png");      
    var espada1 = new Carta(2, "images/2Oros.png");      
    var espada2 = new Carta(3, "images/3Oros.png");     
    var espada3 = new Carta(1, "images/1Oros.png");      
    var espada4 = new Carta(2, "images/2Oros.png");      
    var espada5 = new Carta(3, "images/3Oros.png");      
    var espada6 = new Carta(1, "images/1Oros.png");     
    var espada7 = new Carta(2, "images/2Oros.png");   
    var espada10 = new Carta(3, "images/3Oros.png");      
    var espada11 = new Carta(1, "images/1Oros.png");      
    var espada12 = new Carta(2, "images/2Oros.png");      
    var copas1 = new Carta(3, "images/3Oros.png");       
    var copas2 = new Carta(1, "images/1Oros.png");       
    var copas3 = new Carta(2, "images/2Oros.png");     
    var copas4 = new Carta(3, "images/3Oros.png");       
    var copas5 = new Carta(1, "images/1Oros.png");      
    var copas6 = new Carta(2, "images/2Oros.png");     
    var copas7 = new Carta(3, "images/3Oros.png");      
    var copas10 = new Carta(1, "images/1Oros.png");      
    var copas11 = new Carta(2, "images/2Oros.png");     
    var copas12 = new Carta(3, "images/3Oros.png");   
    var bastos1 = new Carta(1, "images/1Oros.png");      
    var bastos2 = new Carta(2, "images/2Oros.png");       
    var bastos3 = new Carta(3, "images/3Oros.png");      
    var bastos4 = new Carta(1, "images/1Oros.png");      
    var bastos5 = new Carta(2, "images/2Oros.png");      
    var bastos6 = new Carta(3, "images/3Oros.png");     
    var bastos7 = new Carta(1, "images/1Oros.png");      
    var bastos10 = new Carta(2, "images/2Oros.png");      
    var bastos11 = new Carta(3, "images/3Oros.png");      
    var bastos12 = new Carta(1, "images/1Oros.png");      


    var arrayCartas=[oro1,oro2,oro3,oro4,oro5,oro6,oro7,oro10,oro11,oro12,
                     espada1,espada2,espada3,espada4,espada5,espada6,espada7,espada10,espada11,espada12,
                     copas1,copas2,copas3,copas4,copas5,copas6,copas7,copas10,copas11,copas12,
                     bastos1,bastos2,bastos3,bastos4,bastos5,bastos6,bastos7,bastos10,bastos11,bastos12];

    function SacarCarta(){
        var elegido= arrayCartas[1];
        document.getElementById("demo").src=elegido.url;  
    }
