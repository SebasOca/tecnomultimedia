void fondo() {
  fill(0);
  for(int i=0; i<cant; i++){
    for(int j=0; j<cant; j++){
      rect(i*tamCX+tamCX/2+400, j*tamCY+tamCY/2, tamCX, tamCY);
    }
  }
  
  
}