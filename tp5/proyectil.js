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

  }

  dibujar() {  //5 en x, 4 en y
    if (this.proyectilDisparado) {
      image(this.imagenI, this.posXI, this.posYI, 27, 21);
      this.mover();
    }
  }

  mover() {
    this.posXI+=5;
    this.posYI-=4;
  }

  disparar() {
    this.proyectilDisparado = true;
  }
}
