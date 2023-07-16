void textos() {
  fill (43, 237, 200);

  if (inicial==1) {
    for (int i = 0; i < 4; i++) {
      text(texto[i], 70, i * 50 + 340 );
    }
  } else if (inicial==2) {
    for (int i = 4; i < 9; i++) {
      text(texto[i], 50, i * 50 - 160);
    }
    for (int i = 9; i < 12; i++) {
      text(texto[i], 50, i * 50 - 60);
    }
  } else if (inicial==13) {
    for (int i = 12; i < 17; i++) {
      text(texto[i], 40, i * 50 - 550);
    }
  } else if (inicial==14) {
    for (int i = 17; i < 23; i++) {
      text(texto[i], 40, i * 50 - 750);
    }
  } else if (inicial==3) {
    fill (0);
    for (int i = 23; i < 32; i++) {
      text(texto[i], 40, i * 50 - 1080);
    }
  } else if (inicial==4) {
    fill (0);
    for (int i = 32; i < 37; i++) {
      text(texto[i], 40, i * 50 - 1300);
    }
  } else if (inicial==5) {
    fill (0);
    for (int i = 37; i < 44; i++) {
      text(texto[i], 40, i * 50 - 1650);
    }
  } else if (inicial==6) {
    fill (0);
    for (int i = 44; i < 52; i++) {
      text(texto[i], 40, i * 50 - 2100);
    }
  } else if (inicial==15) {
    fill (0);
    for (int i = 52; i < 55; i++) {
      text(texto[i], 35, i * 50 - 2550);
    }
    for (int i = 55; i < 58; i++) {
      text(texto[i], 35, i * 50 - 2350);
    }
  } else if (inicial==16) {
    fill (41, 48, 75);
    for (int i = 58; i < 62; i++) {
      text(texto[i], 37, i * 50 - 2850);
    }
    for (int i = 62; i < 66; i++) {
      text(texto[i], 37, i * 50 - 2750);
    }
  } else if (inicial==7) {
    fill(0);
    for (int i = 0; i < 2; i++) {
      text(textoB[i], 70, i * 50 +60);
    }
    for (int i = 2; i < 8; i++) {
      text(textoB[i], 70, i * 50 +150);
    }
  } else if (inicial==8) {
    fill (0);
    for (int i = 8; i < 14; i++) {
      text(textoB[i], 50, i * 50 - 350);
    }
    textSize(28);
    for (int i = 14; i < 16; i++) {
      text(textoB[i], 50, i * 50 - 315);
    }
  } else if (inicial==9) {
    fill (0);
    for (int i = 16; i < 22; i++) {
      text(textoB[i], 50, i * 40 - 595);
    }
    for (int i = 22; i < 27; i++) {
      text(textoB[i], 50, i * 40 - 535);
    }
  } else if (inicial==17) {
    fill (255);
    for (int i = 27; i < 31; i++) {
      text(textoB[i], 50, i * 40 - 710);
    }
  } else if (inicial==10) {
    fill (0);
    for (int i = 31; i < 36; i++) {
      text(textoB[i], 50, i * 40 - 1190);
    }
    for (int i = 36; i < 39; i++) {
      text(textoB[i], 50, i * 40 - 1110);
    }
  } else if (inicial==11) {
    fill (0);
    for (int i = 39; i < 45; i++) {
      text(textoB[i], 70, i * 40 - 1500);
    }
  } else if (inicial==12) {
    fill (0);
    for (int i = 45; i < 49; i++) {
      text(textoB[i], 70, i * 50 - 2000);
    }
  }
}
