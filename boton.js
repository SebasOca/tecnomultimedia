class Boton {
  constructor() {
    this.posXBS = 550;
    this.posXBA = 190;
    this.posYB = 510;
    this.bSiguiente = bSiguiente;
    this.bAlternativa = bAlternativa;
    this.botonPresionadoS = false;
    this.botonPresionadoA = false;
  }

  dibujar() {
    this.baseFondo();
    this.boton1();
    this.boton2();
  }

  baseFondo() {
    stroke(43, 237, 200);
    strokeWeight(3);
    fill (10, 90);
    ellipse (400, 650, 800, 200);
    noStroke();
    fill (0, 60);
    ellipse (400, 670, 800, 200);
  }

  boton1() {
    image(this.bSiguiente, this.posXBS, this.posYB, 60, 60);
  }

  boton2() {
    image(this.bAlternativa, this.posXBA, this.posYB, 60, 60);
  }

  avanzarHistoria() {
    if (dist (mouseX, mouseY, posXBS, posYB) < 35) {
      this.botonPresionadoS = true;
    } else if (dist (mouseX, mouseY, posXBA, posYB) < 35) {
      this.botonPresionadoA = true;
    }
  }
}
