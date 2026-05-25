import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, PercentPipe} from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './app-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooter {
  
  title = signal('Footer Angular');

  message = signal('ESTE ES MI FOOTER');

  today = signal(new Date());

  price = signal(150);

  percent = signal(0.75);
}
