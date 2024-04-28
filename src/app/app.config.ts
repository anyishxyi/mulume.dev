import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    data: { title: 'Home' },
    loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'contact',
    data: { title: 'Contact' },
    loadComponent: () =>
      import('./pages/contact/contact.component').then((c) => c.ContactComponent),
  },
  {
    path: 'about',
    data: { title: 'About' },
    loadComponent: () => import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'projects',
    data: { title: 'Projects' },
    loadComponent: () =>
      import('./pages/projects/projects.component').then((c) => c.ProjectsComponent),
  },
  {
    path: 'articles',
    data: { title: 'Articles' },
    loadComponent: () =>
      import('./pages/articles/articles.component').then((c) => c.ArticlesComponent),
  },
  {
    path: 'article/:id',
    data: { title: 'Article', date: new Date() },
    loadComponent: () =>
      import('./pages/article/article.component').then((c) => c.ArticleComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideContent(withMarkdownRenderer()),
  ],
};
