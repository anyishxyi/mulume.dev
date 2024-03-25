import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { ShortcutService } from '../../services/shortcut.service';
import { environment } from '../../../environments/environment';
import { SearchService } from '../../services/search.service';
import { SearchItemNames, SearchItemShortcuts } from '../search/search-item';

@Component({
  selector: 'app-shortcut',
  standalone: true,
  template: '',
})
export class ShortcutComponent implements OnInit {
  private appURL = environment.appUrl;
  constructor(
    private router: Router,
    private clipboard: Clipboard,
    private location: Location,
    private shortcutService: ShortcutService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    if (this.shortcutService) {
      const shortcuts = [
        {
          key: SearchItemShortcuts.LINK,
          action: () => this.clipboard.copy(`${this.appURL}${this.location.path()}`),
        },
        {
          key: SearchItemShortcuts.CONTACT,
          action: () => this.router.navigate([SearchItemNames.CONTACT]),
        },
        {
          key: SearchItemShortcuts.HOME,
          action: () => this.router.navigate([SearchItemNames.HOME]),
        },
        {
          key: SearchItemShortcuts.ABOUT,
          action: () => this.router.navigate([SearchItemNames.ABOUT]),
        },
        {
          key: SearchItemShortcuts.ARTICLES,
          action: () => this.router.navigate([SearchItemNames.ARTICLES]),
        },
        {
          key: SearchItemShortcuts.PROJECTS,
          action: () => this.router.navigate([SearchItemNames.PROJECTS]),
        },
        {
          key: SearchItemShortcuts.SEARCH_MODULE,
          action: () => this.searchService.showSearchModule(),
        },
        { key: SearchItemShortcuts.ESCAPE, action: () => this.searchService.hideSearchModule() },
        {
          key: SearchItemShortcuts.SOURCE,
          action: () => window.open('https://github.com/pxradox/mulume.dev', '_blank'),
        },
      ];

      shortcuts.forEach((shortcut) =>
        this.shortcutService.registerShortcut(shortcut.key, shortcut.action)
      );
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.shortcutService) {
      this.shortcutService.handleKeyPress(event);
    }
  }
}
