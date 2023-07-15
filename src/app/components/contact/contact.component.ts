import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <section class="contact-section">
        <p>contact works!</p>
      </section>
    </main>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
