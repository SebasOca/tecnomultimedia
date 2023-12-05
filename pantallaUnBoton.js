class PantallaUnBoton {
  //pantallas 0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 13, 15, 16, 17
  constructor(fondo, boton, pantallaSig, texto) {
    this.fondo = fondo;
    this.texto = new Texto();
    this.pantallaSiguiente = pantallaSig;
    this.boton = new Boton();
  }

  dibujar() {
    image(this.fondo, 0, 0, 800, 600);
    text(this.text);
    this.boton.dibujar(this.baseFondo, this.boton1);
  }

  click() {
    if (this.botonPresionadoS) {
      return this.pantallaSig;
    }
  }
}
