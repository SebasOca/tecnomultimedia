function disparos() {
  //izq
  for (let i=0; i<cantProyectiles; i++) {
    if (disparoIzq && proyectilesIzqDisparados[i] == false) {
      proyectilesIzqDisparados[i] = true;
      disparoIzq = false;
    }
  }
  for (let i=0; i<cantProyectiles; i++) {
    fill(221, 229, 12);
    ellipse(proyectilIzquierdoX[i], proyectilIzquierdoY[i], 10, 10);
    if (proyectilesIzqDisparados[i] == true) {
      proyectilIzquierdoX[i]+=14;
      proyectilIzquierdoY[i]-=8;
    }
  }

  //der: X=775, Y=329
}
