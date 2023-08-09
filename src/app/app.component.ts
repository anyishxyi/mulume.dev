import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShortcutComponent } from './components/shortcut/shortcut.component';
import { SearchComponent } from './components/search/search.component';
import { NotificationComponent } from './components/notification/notification.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,  HeaderComponent, FooterComponent, NotificationComponent, SearchComponent, ShortcutComponent],
  template: `
    <div class="container">
      <app-header (pageChange)="changePage($event)"></app-header>
      <router-outlet></router-outlet>
      <app-footer (pageChange)="changePage($event)"></app-footer>
      <app-notification></app-notification>
      <app-search></app-search>
      <app-shortcut></app-shortcut>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `],
})
export class AppComponent {
  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }
}
