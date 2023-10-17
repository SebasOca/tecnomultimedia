class Juego {
  constructor() {
    //this.contador = new Contador();
    //this.tiempo = new Tiempo();
    this.fondo = fondo;
    this.ciudad = new Ciudad();
    this.torreI = new TorreI();
    this.torreD = new TorreD();
    this.principito = new Principito();
    this.enemigo = new Enemigo();
  }

  dibujar() {
    this.dibujarFondo();
    //this.contador.dibujar();
    //this.tiempo.dibujar();
    this.ciudad.dibujar();
    this.torreI.dibujar();
    this.torreD.dibujar();
    
    this.principito.dibujar();
    this.enemigo.dibujar();
  }

  dibujarFondo() {
    image(this.fondo, 0, 0, width, height);
  }
}
