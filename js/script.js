
    /*********** Definición de la clase cubo ************/
    class Carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.url=arg2;
        }

      }
      
    //Creación de los objetos
    var carta1 = new Carta(1, "images/1Oros.png");       //1 de Oros
    var carta2 = new Carta(2, "images/2Oros.png");       //2 de Oros
    var carta3 = new Carta(3, "images/3Oros.png");       //3 de Oros

    var arrayCartas=[carta1,carta2,carta3];

    function SacarCarta(){
        var elegido= arrayCartas[1];
        document.getElementById("demo").src=elegido.url;  
    }
