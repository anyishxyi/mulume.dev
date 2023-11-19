import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <section class="home-section">
        <h1>Jean-Paul NGALULA MULUME</h1>
        <p>
          <strong
            >Software Engineer at
            <a href="https://www.capgemini.com/" target="blank">Capgemini</a></strong
          >
          <br />
          Interested in craftsmanship
        </p>
        <button (click)="displaySearchModule($event)" class="c-gfjkKg">
          Press <kbd>ctrl</kbd> <kbd>M</kbd> to start →
        </button>
      </section>
    </main>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private searchService: SearchService) {}

  displaySearchModule(event: Event) {
    event.stopPropagation();
    this.searchService.showSearchModule();
  }
}
