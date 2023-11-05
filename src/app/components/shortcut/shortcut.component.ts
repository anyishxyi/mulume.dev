import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { ShortcutService } from '../../services/shortcut.service';
import { environment } from '../../../environments/environment';
import { SearchService } from '../../services/search.service';

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
      this.shortcutService.registerShortcut('L', () => {
        this.clipboard.copy(`${this.appURL}${this.location.path()}`);
      });
      this.shortcutService.registerShortcut('C', () => {
        this.router.navigate(['contact']);
      });
      this.shortcutService.registerShortcut('H', () => {
        this.router.navigate(['home']);
      });
      this.shortcutService.registerShortcut('A', () => {
        this.router.navigate(['about']);
      });
      this.shortcutService.registerShortcut('Control+m', () => {
        this.searchService.showSearchModule();
      });
      this.shortcutService.registerShortcut('Escape', () => {
        this.searchService.hideSearchModule();
      });
      this.shortcutService.registerShortcut('S', () => {
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
