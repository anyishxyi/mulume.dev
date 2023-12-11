/// <reference types="@angular/localize" />

import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: 'home',
    data: { title: 'Home' },
    loadComponent: () =>
      import('./app/components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'contact',
    data: { title: 'Contact' },
    loadComponent: () =>
      import('./app/components/contact/contact.component').then((c) => c.ContactComponent),
  },
  {
    path: 'about',
    data: { title: 'About' },
    loadComponent: () =>
      import('./app/components/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'projects',
    data: { title: 'Projects' },
    loadComponent: () =>
      import('./app/components/projects/projects.component').then((c) => c.ProjectsComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((error) => console.error(error));
