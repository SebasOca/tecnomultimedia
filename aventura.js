class Aventura {
  constructor() {
    this.pantallas = [];
    this.textos = [];

    this.pantallas[0] = new PantallaUnBoton(fondo[0], textos[1]);
    this.pantallas[1] = new PantallaUnBoton(fondo[1], textos[2]);
    this.pantallas[2] = new PantallaDosBotones(fondo[2], textos[6]);//a p13 y14
    this.pantallas[3] = new PantallaUnBoton(fondo[3], textos[25]);
    this.pantallas[4] = new PantallaUnBoton(fondo[4], textos[34]);
    this.pantallas[5] = new PantallaUnBoton(fondo[5], textos[39]);
    this.pantallas[6] = new PantallaDosBotones(fondo[6], textos[46]);//a p15 y16
    this.pantallas[7] = new PantallaUnBoton(fondo[7], textos[68]);
    this.pantallas[8] = new PantallaUnBoton(fondo[8], textos[76]);
    this.pantallas[9] = new PantallaDosBotones(fondo[9], textos[84]);//a p17
    this.pantallas[10] = new PantallaUnBoton(fondo[10], textos[99]);
    this.pantallas[11] = new PantallaUnBoton(fondo[11], textos[107]);
    this.pantallas[12] = new PantallaUnBoton(fondo[12], textos[113]);
    this.pantallas[13] = new PantallaUnBoton(fondo[13], textos[14]);
    this.pantallas[14] = new PantallaDosBotones(fondo[14], textos[19]);
    this.pantallas[15] = new PantallaUnBoton(fondo[15], textos[54]);
    this.pantallas[16] = new PantallaUnBoton(fondo[16], textos[60]);
    this.pantallas[17] = new PantallaUnBoton(fondo[17], textos[95]);

    this.pantallaActual = 0;
  }

  dibujar() {
    this.pantallas[this.pantallaActual].dibujar();
    //this.textos = [];
  }

  click() {
    this.pantallas[this.pantallaActual].click();
  }
}
