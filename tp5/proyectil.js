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
  }

  dibujar() {  //5 en x, 4 en y
     this.moverIzq();
     this.moverDer();
  }

  moverIzq() {
    if (this.proyectilDisparadoIzq) {
      image(this.imagenI, this.posXI+=5, this.posYI-=4, 27, 21);   
    }
  }
  
  moverDer() {
    if (this.proyectilDisparadoDer) {
      image(this.imagenD, this.posXD-=5, this.posYD-=4, 27, 21);
    }
  }

  dispararIzq() {
    this.proyectilDisparadoIzq = true;
  }
  dispararDer() {
    this.proyectilDisparadoDer = true;
  }
}
