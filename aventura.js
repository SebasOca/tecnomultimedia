class Aventura {
  constructor() {
    this.pantallas = [];

    this.pantallas[0] = new PantallaUnBoton(fondo1, "El principito");
    this.pantallas[1] = new PantallaUnBoton(fondo2, texto[1]);
    this.pantallas[2] = new PantallaDosBotones(fondo3, texto[5]);
    this.pantallas[3] = new PantallaUnBoton(fondo4, texto[24]);
    this.pantallas[4] = new PantallaUnBoton(fondo5, texto[33]);
    this.pantallas[5] = new PantallaUnBoton(fondo6, texto[38]);
    this.pantallas[6] = new PantallaDosBotones(fondo7, texto[45]);
    this.pantallas[7] = new PantallaUnBoton(fondo8, texto[67]);
    this.pantallas[8] = new PantallaUnBoton(fondo9, texto[75]);
    this.pantallas[9] = new PantallaDosBotones(fondo10, texto[83]);
    this.pantallas[10] = new PantallaUnBoton(fondo11, texto[98]);
    this.pantallas[11] = new PantallaUnBoton(fondo12, texto[106]);
    this.pantallas[12] = new PantallaUnBoton(fondo13, texto[112]);
    this.pantallas[13] = new PantallaUnBoton(fondo14, texto[13]);
    this.pantallas[14] = new PantallaDosBotones(fondo15, texto[18]);
    this.pantallas[15] = new PantallaUnBoton(fondo16, texto[53]);
    this.pantallas[16] = new PantallaUnBoton(fondo17, texto[59]);
    this.pantallas[17] = new PantallaUnBoton(fondo18, texto[94]);

    this.pantallaActual = 0;
  }

  dibujar() {
    this.pantallas[this.pantallaActual].dibujar()
  }

  click() {
    this.pantallas[this.pantallaActual].click()
  }
}
