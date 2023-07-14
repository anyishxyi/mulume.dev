import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>home works!</p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
