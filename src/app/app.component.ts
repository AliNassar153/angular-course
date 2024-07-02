import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` <input [type]="type" [disabled]="x" />
    <input type="text" [disabled]="x" />
    <button (click)="x = !x">disable</button>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ali';
  x: boolean = true;
  type: string = 'text';
}
