import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, UpperCasePipe, RouterLinkActive],
  templateUrl: './app-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "./app-header.css",
})
export class AppHeader {
  readonly brand = signal("PPW Angular")
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(
    ()=> 
    (this.showInfo() 
    ? 'ocultar info'
    :'Mostrar info'));

  changeBrand(): void {
    // actualizar el valor de la senal brand
    this.brand.update((valor) => valor + '!');
  }

  resetBrand(): void {
    this.brand.set("PPW Angular");
  }

  toggleInfo(){
    this.showInfo.update((value)=> !value);
  }
}
