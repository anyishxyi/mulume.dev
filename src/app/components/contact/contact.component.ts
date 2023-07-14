import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>footer works!</p>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
