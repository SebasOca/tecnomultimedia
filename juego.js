class Juego {
  constructor() {
    //this.contador = new Contador();
    //this.tiempo = new Tiempo();
    this.fondo = fondo;
    this.torres = new Torres();
    this.principito = new Principito();
    this.enemigo = new Enemigo();
  }

  dibujar() {
    this.dibujarFondo();
    //this.contador.dibujar();
    //this.tiempo.dibujar();

    this.torres.dibujar();
    this.principito.dibujar();
    this.enemigo.dibujar();
    //this.disparos.dibujar();
  }

  dibujarFondo() {
    image(this.fondo, 0, 0, width, height);
  }
}
