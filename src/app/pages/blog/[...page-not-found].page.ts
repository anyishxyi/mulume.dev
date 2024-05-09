import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'Not found // Jean-Paul NGALULA',
};

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Content can't be found</h2>
        </div>
        <button (click)="displaySearchModule($event)" class="c-gfjkKg">
          Press <kbd>shift</kbd> <kbd>H</kbd> to go home →
        </button>
      </div>
    </div>
  `,
  styleUrls: ['../notfound.page.scss'],
})
export default class PageNotFoundComponent {
  constructor(private router: Router) {}

  displaySearchModule(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/']);
  }
}
