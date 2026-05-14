import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./Components/app-header/app-header";
import { AppHeroComponent } from "./Components/hero/app-hero";

@Component({
  selector: 'application',
  imports: [RouterOutlet, AppHeader, AppHeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ppw-angular');
  isLoggedIn = false;
  materias = ['Programaciion','Estructura de datos','DB'];
}
