class Proyectil {
  constructor() {
    this.imagen = proyectil;
    this.imagenI = proyectilI;
    this.imagenD = proyectilD;
    this.posXI = 38;
    this.posYI = 464;
    this.posXD = 715;
    this.posYD = 402;
    this.proyectilDisparado = false;
    this.cantProyectiles = 50;
  }

  dibujar() {  //9 en x, 7 en y
    if (!this.proyectilDisparado) {
      if (keyCode == LEFT_ARROW) {
        image(this.imagenI, this.posXI++, this.posYI--, 27, 21);
      }
      if (keyCode == RIGHT_ARROW) {
        image(this.imagenD, this.posXD--, this.posYD--, 27, 21);
      }
    }
  }

  disparar() {
    this.proyectilDisparado =true;
  }
}
