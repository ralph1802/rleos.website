import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'basic-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {

  greetings: string[] = [
    "Hola Mundo",    // Español
    "Hello World",   // Inglés
    "Bonjour le monde", // Francés
    "Hallo Welt",    // Alemán
    "Ciao Mondo",    // Italiano
    "こんにちは世界",  // Japonés
    "안녕하세요 세계", // Coreano
    "你好，世界",      // Chino
    "Olá Mundo",     // Portugués
    "Olá Mundo"      // Portugués (Brasil)
  ];

  private indexTexto: number = 0;
  private indexCaracter: number = 0;
  private textoActual: string = "";
  private velocidad: number = 100;
  private intervaloCambio: number = 3000;

  ngAfterViewInit() {
    this.escribirTexto();
  }

  private escribirTexto() {
    const elemento = document.getElementById("texto-maquina")!;

    if (this.indexCaracter < this.greetings[this.indexTexto].length) {
      this.textoActual += this.greetings[this.indexTexto].charAt(this.indexCaracter);
      elemento.textContent = this.textoActual;
      this.indexCaracter++;
      setTimeout(() => this.escribirTexto(), this.velocidad);
    } else {
      setTimeout(() => this.borrarTexto(), this.intervaloCambio);
    }
  }

  private borrarTexto() {
    const elemento = document.getElementById("texto-maquina")!;

    if (this.textoActual.length > 0) {
      this.textoActual = this.textoActual.substring(0, this.textoActual.length - 1);
      elemento.textContent = this.textoActual;
      setTimeout(() => this.borrarTexto(), this.velocidad);
    } else {
      this.indexTexto = (this.indexTexto + 1) % this.greetings.length;
      this.indexCaracter = 0;
      setTimeout(() => this.escribirTexto(), this.velocidad);
    }
  }
}
