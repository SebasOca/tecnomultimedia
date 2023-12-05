class Juego {
  constructor() {
    this.fondo = fondo;
    this.contador = new Contador();
    this.tiempo = new Tiempo();
    this.principito = new Principito();
    this.torreta = new Torreta();

    this.enemigos = [];
    this.cantEnemigos = 6;
    for (let i=0; i<this.cantEnemigos; i++) {
      this.enemigos[i] = new Enemigo();
    }
  }

  dibujar() {
    this.dibujarFondo();
    this.contador.dibujar();
    //this.tiempo.dibujar();

    this.principito.dibujar();
    this.torreta.dibujar();

    this.dibujarEnemigos();
    if (this.fin()) {
      for (let i=0; i<this.cantEnemigos; i++) {
        this.enemigos[i]= new Enemigo();
      }
    }
    this.impacto();
    if (this.contador.dibujar > 0){
      this.pantallaGanar();
    }
  }

  dibujarFondo() {
    image(this.fondo, 0, 0, width, height);
  }

  dibujarEnemigos() {
    for (let i=0; i<this.cantEnemigos; i++) {
      this.enemigos[i].dibujar();
    }
  }

  impacto() {
    for (let i=0; i<this.cantEnemigos; i++) {
      if (dist (this.torreta.proyectil.posXI, this.torreta.proyectil.posYI, this.enemigos[i].posX, this.enemigos[i].posY) < 40 || dist (this.torreta.proyectil.posXD, this.torreta.proyectil.posYD, this.enemigos[i].posX, this.enemigos[i].posY) < 40) {
        this.enemigos[i].derribar();
        this.contador.sumar();
      }
    }
  }

  fin() {
    return this.tiempo.termino();
  }

  pantallaGanar() {
    image(this.fondoG, 0, 0, width, height);
    textSize(100);
    fill (0, 255, 0);
    text ("GANASTE", 400, 200);
  }
  
  pantallaPerder(){
    image(this.fondoP, 0, 0, width, height);
    fill (0, 255, 0);
    textSize(100);
    text ("PERDISTE", 400, 200);    
  }
}
