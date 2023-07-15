import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <section class="about-section">
        <p>about works!</p>
      </section>
    </main>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
