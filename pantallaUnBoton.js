class PantallaUnBoton {
  //pantallas 0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 13, 15, 16, 17
  constructor(fondo, boton, pantallaSig, texto) {
    this.fondo = fondo;
    this.pantallaSig = pantallaSig;
    this.texto = new Texto();
    this.boton = new Boton();
  }

  dibujar() {
    image(this.fondo, 0, 0, 800, 600);
    this.texto.dibujar();
    this.boton.dibujar();
  }

  click() {
    if (this.botonPresionadoS) {
      return this.pantallaSig;
    }
  }
}
