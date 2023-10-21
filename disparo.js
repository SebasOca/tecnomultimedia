class Disparo {
  constructor() {
    this.imagen = rayo;
    this.imagenI = rayoI;
    this.imagenD = rayoD;
    this.posXI = 38;
    this.posYI = 464;
    this.posXD1 = 715;
    this.posYD1 = 402;
  }

  dibujar() {  //9 en x, 7 en y
    if (keyCode == LEFT_ARROW) {
      image(this.imagenI, this.posXI++, this.posYI--, 27, 21);
    }
    if (keyCode == RIGHT_ARROW) {
      image(this.imagenD, this.posXD1--, this.posYD1--, 27, 21);
    }
  }
}
