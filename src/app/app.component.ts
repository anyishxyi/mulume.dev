import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,  HeaderComponent, FooterComponent],
  template: `
    <app-header (pageChange)="changePage($event)"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  changePage(page: string): void {
    switch (page) {
      case 'contact':
        this.router.navigate(['/contact']);
        break;
      case 'about':
        this.router.navigate(['/about']);
        break;
      default:
        this.router.navigate(['/home']);
        break;
    }
  }
}
