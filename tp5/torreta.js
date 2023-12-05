class Torreta {
  constructor() {
    this.imagenIz = torreI;
    this.imagenDer = torreD;

    this.posXTI = 0;
    this.posYTI = 464;
    this.posXTD = 720;
    this.posYTD = 404;

    this.proyectil = new Proyectil();
  }

  dibujar() {
    this.proyectil.dibujar();
    this.controles();
    image(this.imagenIz, this.posXTI, this.posYTI, 80, 40);
    image(this.imagenDer, this.posXTD, this.posYTD, 80, 40);
  }

  controles() {
    if (keyCode == LEFT_ARROW) {
      this.dispararProyectilIzq();
    }
    if (keyCode == RIGHT_ARROW) {
      this.dispararProyectilDer();
    }
  }

  dispararProyectilIzq() {
    this.proyectil = new Proyectil ();
    this.proyectil.dispararIzq();
  }
  dispararProyectilDer() {
    this.proyectil = new Proyectil ();
    this.proyectil.dispararDer();
  }
}
