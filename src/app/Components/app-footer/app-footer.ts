import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe],
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
