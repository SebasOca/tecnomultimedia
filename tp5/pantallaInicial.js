class PantallaInicial {
  constructor() {
    this.imagen = inicial;
    this.imagenB = b1;
    this.juego = new Juego();
    this.juegoIniciado = false;
  }

  dibujar() {
    if (!this.juegoIniciado) {
      image(this.imagen, 0, 0, 800, 600);
      image(this.imagenB, 350, 390, 100, 110);

      fill(255);
      stroke(119, 3, 255, 80);
      textFont(fuente);
      textAlign(CENTER);
      textSize(22);
      text("Pulsa las flechas Izq. y Der. para disparar\ndesde sus respectivas torres", 400, 520);

      noStroke();
    } else {
       this.juego.dibujar();
    }
  }

  comenzarJuego() {
    if (dist (mouseX, mouseY, 400, 442) < 40) {
      this.juegoIniciado = true;
    }
  }
}
