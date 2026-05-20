import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  styleUrl: './students-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsPage {
  readonly students = signal([
    {id:1, name: "Juan Peréz"},
    {id:2, name: "Diego Peréz"},
    {id:3, name: "Josué Peréz"},
    {id:4, name: "Matías Peréz"},
    {id:5, name: "Fernando Peréz"}
    
  ])
}
