import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Prototipo de Aplicación para gestión de la calidad </h1>
  <ul>
    <li>
        Control de calidad en el ingreso-datos a la base de datos catastral
    </li>
    <li>
      Aplicación Cliente de base de datos desarrollada en Python 
      </li>
    <li>      
    Controlador de conección a base de datos (PosgreSQL)

    </li>
  </ul>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
