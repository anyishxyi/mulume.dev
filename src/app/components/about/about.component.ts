import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>about works!</p>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
