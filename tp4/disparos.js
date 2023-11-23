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

  //der
  for (let i=0; i<cantProyectiles; i++) {
    if (disparoDer && proyectilesDerDisparados[i] == false) {
      proyectilesDerDisparados[i] = true;
      disparoDer = false;
    }
  }
  for (let i=0; i<cantProyectiles; i++) {
    fill(221, 229, 12);
    ellipse(proyectilDerechoX[i], proyectilDerechoY[i], 10, 10);
    if (proyectilesDerDisparados[i] == true) {
      proyectilDerechoX[i]-=14;
      proyectilDerechoY[i]-=8;
    }
  }
}
