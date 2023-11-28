class Boton {
  constructor() {
    this.bSiguiente = bSiguiente;
    this.bAlternativa = bAlternativa;
  }

  dibujar() {
    //base de fondo
    stroke(43, 237, 200);
    strokeWeight(3);
    fill (10, 90);
    ellipse (400, 650, 800, 200);
    noStroke();
    fill (0, 60);
    ellipse (400, 670, 800, 200);
    
    this.boton1();
  }
  
  boton1(){
    image(this.bSiguiente, 550, 510, 60, 60);
  }
  
  boton2(){
    image(this.bAlternativa, 190, 510, 60, 60);
  }
  
}
