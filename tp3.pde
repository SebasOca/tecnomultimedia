// Enlace al video explicativo: 

PImage fondo;

String [] parrafos;

void setup () {
  size (600, 600);
  textSize(30);
  fondo = loadImage ("fondo.jpg");
  
}

void draw () {
  image (fondo, 0, 0, 600, 600);
  botonera();
  
  parrafos = loadStrings("textos.txt");

}
