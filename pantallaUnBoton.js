class PantallaUnBoton {
  //pantallas 0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 13, 15, 16, 17
  constructor() {
    this.fondo[i] = fondo[i];
    this.texto = texto;
    this.boton = new Boton();
  }

  dibujar() {
    image(this.fondo[i], 0, 0, 800, 600);
    text(this.text);
    this.boton.dibujar()
  }
  
  click(){
    this.boton.click()
  }
}
