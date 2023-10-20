class AntiaereoDer{
  constructor(){
    this.posX = 720;
    this.posY = 404;
    this.imagen = rayo;
    this.antiaereo = false;
  }
  
  dibujar(){
    image(this.imagen, 720, 404, 80, 40);
    if (!this.antiaereo){
      this.posX ++;
      this.posY ++;
    }
  }
  
  antiaereo(){
    this.antiaereo = true;
  }
}
