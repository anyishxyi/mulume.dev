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
      this.shortcutService.registerShortcut(SearchItemShortcuts.LINK, () => {
        this.clipboard.copy(`${this.appURL}${this.location.path()}`);
      });
      this.shortcutService.registerShortcut(SearchItemShortcuts.CONTACT, () => {
        this.router.navigate([SearchItemNames.CONTACT]);
      });
      this.shortcutService.registerShortcut(SearchItemShortcuts.HOME, () => {
        this.router.navigate([SearchItemNames.HOME]);
      });
      this.shortcutService.registerShortcut(SearchItemShortcuts.ABOUT, () => {
        this.router.navigate([SearchItemNames.ABOUT]);
      });
      this.shortcutService.registerShortcut(SearchItemShortcuts.PROJECTS, () => {
        this.router.navigate([SearchItemNames.PROJECTS]);
      });
      this.shortcutService.registerShortcut(SearchItemShortcuts.SEARCH_MODULE, () => {
        this.searchService.showSearchModule();
      });
      this.shortcutService.registerShortcut(SearchItemShortcuts.ESCAPE, () => {
        this.searchService.hideSearchModule();
      });
      this.shortcutService.registerShortcut(SearchItemShortcuts.SOURCE, () => {
        const link = 'https://github.com/pxradox/mulume.dev';
        window.open(link, '_blank');
      });
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.shortcutService) {
      this.shortcutService.handleKeyPress(event);
    }
  }
}
