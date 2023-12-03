class Torreta {
  constructor() {
    this.imagenIz = torreI;
    this.imagenDer = torreD;
    this.proyectil = new Proyectil();
  }

  dibujar() {
    this.proyectil.dibujar();
    image(this.imagenIz, 0, 464, 80, 40);
    image(this.imagenDer, 720, 404, 80, 40);
  }
}
