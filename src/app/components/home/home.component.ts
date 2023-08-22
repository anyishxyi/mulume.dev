import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <section class="home-section">
        <h1>Jean-Paul NGALULA</h1>
        <p><strong>Ingénieur logiciel chez <a href="https://inventiv-it.fr/" target="blank">Inventiv IT</a></strong>
        <br>
        Intéressé par le craftmanship</p>
        <button (click)="displaySearchModule($event)" class="c-gfjkKg">Appuyez sur <kbd>ctrl</kbd> <kbd>K</kbd> pour commencer →</button>
      </section>
    </main>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private searchService: SearchService) {}

  displaySearchModule(event: Event) {
    event.stopPropagation();
    this.searchService.showSearchModule();
  }
}
