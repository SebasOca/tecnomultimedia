class PantallaDosBotones{
  //pantallas 2, 6, 9, 14
  constructor() {
    this.fondo[i] = fondo[i];
    this.texto = texto;
    this.boton1 = new Boton();
    this.boton2 = new Boton();
  }
  
  dibujar(){
    image(this.fondo[i], 0, 0, 800, 600);
    text(this.text);
    this.boton1.dibujar()
    this.boton2.dibujar()
  }
  
  click(){
    this.boton1.click()
    this.boton2.click()
  }  
}
