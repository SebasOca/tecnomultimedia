class Juego{
  constructor(){
    //this.contador = new Contador();
    //this.tiempo = new Tiempo();
    this.fondo = fondo;
   
  }
  
  dibujar(){
    this.dibujarFondo();
    //this.contador.dibujar();
    //this.tiempo.dibujar();
    this.ciudad.dibujar();
    this.principito.dibujar();
    this.enemigo.dibujar();
    this.torreI.dibujar();
    this.torreD.dibujar();
    
    
  }
  
  dibujarFondo(){
    image(this.fondo, 0, 0, width, height);
  }
  
}
