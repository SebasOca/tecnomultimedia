class Tiempo {
  constructor() {
    this.tiempo = 0;
    this.tiempoFinal = 10;  //max. 45seg
  }

  dibujar() {
    textSize(15);
    text("Tiempo: "+ this.tiempo + " seg.", 90, 75);

    this.incrementarTiempo();
  }

  incrementarTiempo() {
    if (frameCount%60 == 0) {
      this.tiempo++;
    }
  }

  termino() {
    return this.tiempo >= this.tiempoFinal;
  }
}
