import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts-page',
  imports: [CommonModule],
  templateUrl: './layouts-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutsPage {}
