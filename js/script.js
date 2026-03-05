
    /*********** Definición de la clase cubo ************/
    class Carta {
        constructor (arg1, arg2) {
            this.valor=parseFloat(arg1);
            this.url=arg2;
        }

      }
      
    //Creación de los objetos
    var oro1 = new Carta(1, "images/1.1oros.png");       
    var oro2 = new Carta(2, "images/1.2oros.png");       
    var oro3 = new Carta(3, "images/1.3oros.png");       
    var oro4 = new Carta(4, "images/1.4oros.png");       
    var oro5 = new Carta(5, "images/1.5oros.png");       
    var oro6 = new Carta(6, "images/1.6oros.png");       
    var oro7 = new Carta(7, "images/1.7oros.png");       
    var oro10 = new Carta(0.5, "images/1.8oros.png");       
    var oro11 = new Carta(0.5, "images/1.9oros.png");       
    var oro12 = new Carta(0.5, "images/1.10oros.png");      
    var espada1 = new Carta(1, "images/2.1espadas.png");      
    var espada2 = new Carta(2, "images/2.2espadas.png");     
    var espada3 = new Carta(3, "images/2.3espadas.png");      
    var espada4 = new Carta(4, "images/2.4espadas.png");      
    var espada5 = new Carta(5, "images/2.5espadas.png");      
    var espada6 = new Carta(6, "images/2.6espadas.png");     
    var espada7 = new Carta(7, "images/2.7espadas.png");   
    var espada10 = new Carta(0.5, "images/2.8espadas.png");      
    var espada11 = new Carta(0.5, "images/2.9espadas.png");      
    var espada12 = new Carta(0.5, "images/2.10espadas.png");      
    var copas1 = new Carta(1, "images/3.1copas.png");       
    var copas2 = new Carta(2, "images/3.2copas.png");       
    var copas3 = new Carta(3, "images/3.3copas.png");     
    var copas4 = new Carta(4, "images/3.4copas.png");       
    var copas5 = new Carta(5, "images/3.5copas.png");      
    var copas6 = new Carta(6, "images/3.6copas.png");     
    var copas7 = new Carta(7, "images/3.7copas.png");      
    var copas10 = new Carta(0.5, "images/3.8copas.png");      
    var copas11 = new Carta(0.5, "images/3.9copas.png");     
    var copas12 = new Carta(0.5, "images/3.10copas.png");   
    var bastos1 = new Carta(1, "images/4.1bastos.png");      
    var bastos2 = new Carta(2, "images/4.2bastos.png");       
    var bastos3 = new Carta(3, "images/4.3bastos.png");      
    var bastos4 = new Carta(4, "images/4.4bastos.png");      
    var bastos5 = new Carta(5, "images/4.5bastos.png");      
    var bastos6 = new Carta(6, "images/4.6bastos.png");     
    var bastos7 = new Carta(7, "images/4.7bastos.png");      
    var bastos10 = new Carta(0.5, "images/4.8bastos.png");      
    var bastos11 = new Carta(0.5, "images/4.9bastos.png");      
    var bastos12 = new Carta(0.5, "images/4.10bastos.png");      


    var arrayCartas=[oro1,oro2,oro3,oro4,oro5,oro6,oro7,oro10,oro11,oro12,
                     espada1,espada2,espada3,espada4,espada5,espada6,espada7,espada10,espada11,espada12,
                     copas1,copas2,copas3,copas4,copas5,copas6,copas7,copas10,copas11,copas12,
                     bastos1,bastos2,bastos3,bastos4,bastos5,bastos6,bastos7,bastos10,bastos11,bastos12];
    
    // Creación de variables
    var nota=0.0, notamaquina=0.0, plantado=false, condicion=0;
    
    // Función para que el jugador saque carta y calcule su puntuación
    function SacarCarta() {
        if(!plantado){
            var nuevaImagen = document.createElement("img");
        
            var cartaleatoria=Math.floor(Math.random()*arrayCartas.length);
            var elegido= arrayCartas[cartaleatoria];
            nuevaImagen.src=elegido.url;

            nuevaImagen.style.width = "110px";
            nuevaImagen.style.height = "170px";

            nota+=elegido.valor;
            arrayCartas.splice(cartaleatoria, 1);
            document.getElementById("tapete").appendChild(nuevaImagen);
        }
        document.getElementById("puntaje-jugador").innerHTML = "Tu puntuación: " + nota;
    }

    // Función para plantarse
    function Plantarse() {
        plantado=true;
        Maquina();
    }

    // Función para que juegue la máquina
    async function Maquina() {
        const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const puntajeMaquina = document.getElementById("puntaje-maquina");
        document.getElementById("maquina");
        while(notamaquina<7.5){
            var nuevaImagen = document.createElement("img");
            var cartaleatoria=Math.floor(Math.random()*arrayCartas.length);
            var elegido= arrayCartas[cartaleatoria];

            nuevaImagen.src=elegido.url;
            nuevaImagen.style.width = "90px";
            nuevaImagen.style.height = "135px";

            notamaquina+=elegido.valor;
            arrayCartas.splice(cartaleatoria, 1);

            document.getElementById("maquina").appendChild(nuevaImagen);
            puntajeMaquina.textContent = "Puntuación máquina: " + notamaquina;
            await esperar(800);
        }
        
        if(nota===7.5){
            condicion=1;
        } else if(notamaquina===7.5){
            condicion=0;
        } else if(nota<7.5 && notamaquina<7.5){
            if(nota>=notamaquina){
                condicion=1;
            } else {
                condicion=0;
            }
        } else if(nota>7.5 && notamaquina>7.5){
             if(nota<=notamaquina){
                condicion=1;
            } else {
                condicion=0;
            }
        } else if(nota<7.5 && notamaquina>7.5){
            condicion=1;
        } else if(nota>7.5 && notamaquina<7.5){
            condicion=0;
        }
        mostrarImagenFinal(condicion);
    }

    // Función que debes llamar cuando detectes que el proceso "ha finalizado"
    function mostrarImagenFinal(condicion) {
        const imagen = document.getElementById('imagen-final');
        const overlay = document.getElementById('pantalla-final');

        // Evaluamos el resultado para elegir la imagen
        if (condicion === 1) {
            imagen.src = "images/victoria.png"; 
            imagen.alt = "¡Enhorabuena, lo lograste!";
        } else if (condicion === 0) {
            imagen.src = "images/derrota.png";
            imagen.alt = "Vaya, inténtalo de nuevo.";
        }

        // Una vez cambiada la imagen, mostramos la capa superpuesta
        overlay.classList.remove('oculto');
    }
document.addEventListener('DOMContentLoaded', function() {
    // Lógica para cerrar la imagen final si el usuario quiere seguir viendo la página
    document.getElementById('cerrar-modal').addEventListener('click', function() {
    location.reload(); // Esto fuerza al navegador a recargar la página por completo
});
});

function playaudio(){
    document.getElementById("audio").play();
}