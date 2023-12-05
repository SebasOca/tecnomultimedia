class Aventura {
  constructor(pantallas) {
    this.pantallas = [];
    this.textos = textos;

    this.pantallas[0] = new PantallaUnBoton(fondo[0], [1], "El principito");
    this.pantallas[1] = new PantallaUnBoton(fondo[1], textos[1]);
    this.pantallas[2] = new PantallaDosBotones(fondo[2], textos[5]);//a p13 y14
    this.pantallas[3] = new PantallaUnBoton(fondo[3], textos[24]);
    this.pantallas[4] = new PantallaUnBoton(fondo[4], textos[33]);
    this.pantallas[5] = new PantallaUnBoton(fondo[5], textos[38]);
    this.pantallas[6] = new PantallaDosBotones(fondo[6], textos[45]);//a p15 y16
    this.pantallas[7] = new PantallaUnBoton(fondo[7], textos[67]);
    this.pantallas[8] = new PantallaUnBoton(fondo[8], textos[75]);
    this.pantallas[9] = new PantallaDosBotones(fondo[9], textos[83]);//a p17
    this.pantallas[10] = new PantallaUnBoton(fondo[10], textos[98]);
    this.pantallas[11] = new PantallaUnBoton(fondo[11], textos[106]);
    this.pantallas[12] = new PantallaUnBoton(fondo[12], textos[112]);
    this.pantallas[13] = new PantallaUnBoton(fondo[13], textos[13]);
    this.pantallas[14] = new PantallaDosBotones(fondo[14], textos[18]);
    this.pantallas[15] = new PantallaUnBoton(fondo[15], textos[53]);
    this.pantallas[16] = new PantallaUnBoton(fondo[16], textos[59]);
    this.pantallas[17] = new PantallaUnBoton(fondo[17], textos[94]);

    this.pantallaActual = 0;
  }

  dibujar() {
    this.pantallas[this.pantallaActual].dibujar();
  }

  click() {
    this.pantallas[this.pantallaActual].click();
  }
}
