class Tiempo {
  constructor() {
    this.tiempo = 0;
    this.tiempoLimite = 10;  //max. 45seg
  }

  dibujar() {
    fill(255);
    textSize(30);
    text( "Tiempo: "+ this.tiempo, 100, 560);

    this.incrementarTiempo();
  }

  incrementarTiempo() {
    if (frameCount%60 == 0) {
      this.tiempo++;
    }
  }

  llegoLimite() {
    return this.tiempo >= this.tiempoLimite;
  }
}
