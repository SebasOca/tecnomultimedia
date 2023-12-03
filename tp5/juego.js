class Juego {
  constructor() {
    this.fondo = fondo;
    this.contador = new Contador();
    this.tiempo = new Tiempo();
    this.principito = new Principito();
    this.torreta = new Torreta();

    this.enemigos = [];
    this.cantEnemigos = 4;
    for (let i=0; i<this.cantEnemigos; i++) {
      this.enemigos[i] = new Enemigo();
    }
  }

  dibujar() {
    this.dibujarFondo();
    this.contador.dibujar();
    this.tiempo.dibujar();

    this.principito.dibujar();
    this.torreta.dibujar();

    this.dibujarEnemigos();
    if (this.fin()) {
      for (let i=0; i<this.cantEnemigos; i++) {
        this.enemigos[i]= new Enemigo();
      }
    }
    this.impacto();
  }

  dibujarFondo() {
    image(this.fondo, 0, 0, width, height);
  }

  dibujarEnemigos() {
    for (let i=0; i<this.cantEnemigos; i++) {
      this.enemigos[i].dibujar();
    }
    this.impacto();
  }

  impacto() {
    for (let i=0; i<this.cantEnemigos; i++) {
      if (dist (this.torreta.proyectil.posXI, this.torreta.proyectil.posYI, this.enemigos[i].posX, this.enemigos[i].posY) < 50 || dist (this.torreta.proyectil.posXD, this.torreta.proyectil.posYD, this.enemigos[i].posX, this.enemigos[i].posY) < 50) {
        this.enemigos[i].derribar();
        this.contador.sumar();
      }
    }
  }

  fin() {
    return this.tiempo.termino();
  }
}
