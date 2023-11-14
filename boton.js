class Boton {
  constructor() {
    this.bSiguiente = bSiguiente;
    this.bAlternativa = bAlternativa;
  }

  dibujar() {
    stroke(43, 237, 200);
    strokeWeight(3);
    fill (10, 90);
    ellipse (400, 650, 800, 200);
    noStroke();
    fill (0, 60);
    ellipse (400, 670, 800, 200);

    image(bSiguiente, 505, 500, 70, 70);
    image(bAlternativa, 170, 450, 70, 70);
  }

  paraPantallaDeUnBoton() {
  }
  
  paraPantallaDeDosBotones() {
  }
}
