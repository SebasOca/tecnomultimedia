class Juego {
  constructor() {
    this.fondo = fondo;
    this.contador = new Contador();
    this.tiempo = new Tiempo();

    this.principito = new Principito();
    this.enemigo = new Enemigo();
    this.torreta = new Torreta();
    this.proyectil = new Proyectil();
  }

  dibujar() {
    this.dibujarFondo();
    this.contador.dibujar();
    this.tiempo.dibujar();

    this.principito.dibujar();
    this.enemigo.dibujar();
    this.torreta.dibujar();
    this.proyectil.dibujar();
    this.impacto();
  }

  dibujarFondo() {
    image(this.fondo, 0, 0, width, height);
  }

  impacto() {
    if (dist (this.proyectil.posXI , this.proyectil.posYI, this.enemigo.posX, this.enemigo.posY) < 50) {
      this.enemigo.derribar();
      this.contador.sumar();
    }
  }

  fin() {
    return this.tiempo.termino();
  }
}
