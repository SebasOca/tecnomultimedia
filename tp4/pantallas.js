function pantallas() {
  textFont(fuente);
  textAlign(CENTER);
  fill(221, 229, 12);

  if (pantalla == 0) {
    //inicial
    image(inicial, 0, 0, 800, 600);
    image(b2, 150, 450, 100, 39);
    image(b1, 325, 440, 150, 58);
    image(b3, 550, 450, 100, 39);
    
  } else if (pantalla == 1) {
    //instrucciones
    image(fondo, 0, 0, 800, 600);
    image(b5, 660, 545, 100, 39);
    image(torreI, 0, 354, 40, 23);
    image(torreC, 360, 320, 40, 23);
    image(torreD, 760, 320, 40, 23);
    image(ciudad, 80, 487, 81, 22);
    image(domo, 190, 421, 80, 25);
    image(puente, 480, 485, 80, 24);
    image(en2, 190, 140, 60, 25);
    image(en1, 500, 100, 60, 25);

    textSize(25);
    text('Intenta sobrevivir un minuto frente a las naves enemigas', 400, 70);
    textSize(18);
    text('Pulsa "izquierda" para abrir fuego\ncon la torre izquierda,\ny "derecha" para la torre derecha', 170, 220);
    text('Pulsa "arriba" para atacar con el canon central', 400, 310);
    text('Elimina a los invasores antes\n de que destruyan la ciudad', 640, 220);
    text('Cada enemigo abatido da 10 puntos', 380, 570);
    
  } else if (pantalla == 2) {
    //juego
    image(fondo, 0, 0, 800, 600);
    image(b4, 40, 545, 100, 39);
    image(b5, 660, 545, 100, 39);

    //defensas
    disparos();
    torres();

    //proteger
    image(ciudad, 80, 487, 81, 22);
    image(domo, 190, 421, 80, 25);
    image(puente, 480, 485, 80, 24);

    enemigos();
    verificarVidaEnemigos();
    control();
    contador();
    
  } else if (pantalla == 3) {
    //creditos
    image(fondocred, 0, 0, 800, 600);
    image(b5, 660, 545, 100, 39);

    textSize(40);
    text('Creditos', 400, 200);
    textSize(25);
    text ('Recreado por Sebastian Ocampo', 400, 300 );
    text('Basado en el juego de Imagic', 400, 360);
  }
}
