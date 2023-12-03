class Proyectil {
  constructor() {
    this.imagen = proyectil;
    this.imagenI = proyectilI;
    this.imagenD = proyectilD;
    this.posXI = 38;
    this.posYI = 464;
    this.posXD = 715;
    this.posYD = 402;
    this.proyectilDisparadoIzq = false;
    this.proyectilDisparadoDer = false;
    this.cantProyectiles = 50;
  }

  dibujar() {  //9 en x, 7 en y
    if (!this.proyectilDisparadoIzq) {
      if (keyCode == LEFT_ARROW) {
        image(this.imagenI, this.posXI+=2, this.posYI-=2, 27, 21);
      }
    }
    if (!this.proyectilDisparadoDer) {
      if (keyCode == RIGHT_ARROW) {
        image(this.imagenD, this.posXD-=2, this.posYD-=2, 27, 21);
      }
    }
  }

  disparar() {
    this.proyectilDisparadoIzq =true;
    this.proyectilDisparadoDer =true;
  }
}
