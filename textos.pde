void textos() {
  fill (43, 237, 200);

  if (inicial==1) {
    for (int i = 0; i < 4; i++) {
      text(texto[i], 70, i * 50 + 340);
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
  }
}
