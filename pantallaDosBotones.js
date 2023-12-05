class PantallaDosBotones {
  //pantallas 2, 6, 9, 14
  constructor(fondo, boton, pantallaSig, pantallaAlt, texto) {
    this.fondo = fondo;
    this.texto = new Texto();
    this.pantallaSiguiente = pantallaSig;
    this.pantallaAlternativa = pantallaAlt;
    this.boton = new Boton();
  }

  dibujar() {
    image(this.fondo, 0, 0, 800, 600);
    this.texto.dibujar();
    this.boton.dibujar();
    this.boton.boton2();
  }

  click() {
    if (this.botonPresionadoS) {
      return this.pantallaSig;
    } else if (this.botonPresionadoA) {
      return this.pantallaAlt;
    }
  }
}
