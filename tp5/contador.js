class Contador {
  constructor() {
    this.cantidad = 0;
  }

  dibujar() {
    fill(119, 3, 255);
    textSize(15);
    text(this.cantidad + " Derribados", 90, 50);
  }

  sumar() {
    this.cantidad = +1;
  }
}
