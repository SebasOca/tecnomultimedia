class Disparo {
  constructor() {
    this.imagen = rayo;
    this.imagenI = rayoI;
    this.imagenD = rayoD;
    this.posXI1 = 38;
    this.posYI1 = 464;
    this.posXD1 = 715;
    this.posYD1 = 402;
  }

  dibujar() {  //9 en x, 7 en y
    if (keyCode == LEFT_ARROW) {
      image(this.imagenI, this.posXI1++, this.posYI1--, 27, 21);
    } else if (keyCode == RIGHT_ARROW) {
      image(this.imagenD, this.posXD1--, this.posYD1--, 27, 21);
    }
  }
}
