# SieteyMedia
Repositorio para el trabajo de sistemas de las siete y media.

En este repositorio se encuentra el trabajo realizado para el modulo de lenguaje de marcas.
El trabajo consta de un juego de cartas español conocido como "Siete y media". El juego consiste en sacar cartas de la baraja española(entre 1 y 12 sin 8 ni 9) hasta llegar a 7,5 puntos.
Las cartas del 1 al 7 sumas los puntos equivalentes a su número de carta, sin embargo las figuras, es decir, sota, caballo y rey, equivalen a medio punto cada una.

El usuario en la interfaz principal tendra la opción de empezar a jugar, al pulsar iniciar a jugar se le repartirá la primera carta automáticamente y entonces le daremos dos opciones, la primera le permitirá volver a robar carta, esto mostrará una segunda carta en pantalla y sumara su valor con la anterior. La segunda opción antes mencionada daria la oportunidad al jugador de terminar su turno, al seleccionarlo pasaria a ser el turno de la máquina.

En su turno, la máquina, realiza el mismo proceso que ya relizó el jugador, roba o se planta hasta alcanzar, al menos, 7,5 puntos. Una vez finalizado el turno del ordenador, se comparará con los puntos del jugador y ganará el que se haya quedado mas cerca del objetivo. En pos de buscar que el juego sea mas interesante he permitido que el jugador se pueda pasar de 7.5 puntos y ganar, para calcular el campeón usaremos la siguiente lógica.

Si el jugador llega a 7.5 gana indistintamente del puntuaje de la maquina, otorgando así una pequeña ventaja al jugador y evitar que se frustre. En cambio, si la máquina llega a 7.5 y el jugador no, será la máquina la que gana. En un supuesto de que la máquina se pase y el jugador no llegue a la puntuación la victoria será del jugador y viceversa. El último caso, que ambos se pasen o ninguno llegue, en dicho supuesto ganará el que se haya quedado más cerca de los siete puntos y medio mientras que en una situación de empate la victoria irá para el jugador. 

Tras la comparación se mostrará la pantalla del resultado, con un logo de victoria o derrota ademas de mostrando un botón de volver a jugar.
