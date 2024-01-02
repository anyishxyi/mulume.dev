import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShortcutComponent } from './components/shortcut/shortcut.component';
import { SearchComponent } from './components/search/search.component';
import { NotificationComponent } from './components/notification/notification.component';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    SearchComponent,
    ShortcutComponent,
  ],
  template: `
    <div class="container">
      <app-header (pageChange)="changePage($event)"></app-header>
      <router-outlet />
      <app-footer (pageChange)="changePage($event)"></app-footer>
      <app-notification />
      <app-search />
      <app-shortcut />
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const pageTitle = this.getPageTitle(this.activatedRoute);
      this.titleService.setTitle(pageTitle);
    });
  }

  changePage(page: string) {
    this.router.navigate([page]);
  }

  private getPageTitle(route: ActivatedRoute): string {
    const defaultTitle = 'Jean-Paul Mulume';
    let returnedTitle = defaultTitle;
    if (route.firstChild) {
      return this.getPageTitle(route.firstChild);
    }

    if (route.snapshot.data && route.snapshot.data.title) {
      returnedTitle = $localize`${route.snapshot.data.title}`;
      returnedTitle += ` // ${defaultTitle}`;
    }

    return returnedTitle;
  }
}
