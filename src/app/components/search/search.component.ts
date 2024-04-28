import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchItem, SearchItemNames, SearchItemShortcuts } from './search-item';
import { Router } from '@angular/router';
import { ShortcutService } from '../../services/shortcut.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="{{ searchElementId }}" *ngIf="isSearchModuleVisible" class="c-hWUbGb">
      <div class="c-iqTopT">
        <div>
          <input
            #searchInput
            type="text"
            placeholder="Type a command or search…"
            (input)="performSearch($event)"
            class="c-ekIDDi"
            autocomplete="off"
            role="combobox"
            spellcheck="false"
            aria-expanded="true"
            aria-controls="kbar-listbox"
            aria-activedescendant="kbar-listbox-item-1" />
          <div class="c-ertyu">
            <div role="listbox" id="kbar-listbox" class="c-oeiotf">
              <div class="c-title" *ngIf="generalCPItems.length > 0">
                <div class="c-kcmNSe">General</div>
              </div>
              <div
                *ngFor="let item of generalCPItems"
                (click)="handleClick(item)"
                (keyup)="handleClick(item)"
                role="option"
                aria-selected="true"
                class="c-condee"
                tabindex="0">
                <div class="PJLV-iljSPlw-css">
                  <div class="c-eSulSs">
                    <div class="c-imgsize">
                      <img
                        alt="link"
                        class="c-imgsize"
                        aria-hidden="true"
                        [src]="item.src"
                        loading="lazy" />
                    </div>
                    <div class="c-fixGjY">
                      <span>{{ item.label }}</span>
                    </div>
                  </div>
                  <div aria-hidden="true" class="c-jpnQgQ">
                    <kbd *ngFor="let shortcut of item.shortcut" class="c-ddlVgM">{{
                      shortcut
                    }}</kbd>
                  </div>
                </div>
              </div>
              <div *ngIf="pageCPItems.length > 0" class="c-title">
                <div class="c-kcmNSe">Go to</div>
              </div>
              <div
                *ngFor="let item of pageCPItems"
                (click)="handleClick(item)"
                (keyup)="handleClick(item)"
                role="option"
                aria-selected="true"
                class="c-condee"
                tabindex="0">
                <div class="PJLV-iljSPlw-css">
                  <div class="c-eSulSs">
                    <div class="c-imgsize">
                      <img
                        alt="link"
                        class="c-imgsize"
                        aria-hidden="true"
                        [src]="item.src"
                        loading="lazy" />
                    </div>
                    <div class="c-fixGjY">
                      <span>{{ item.label }}</span>
                    </div>
                  </div>
                  <div aria-hidden="true" class="c-jpnQgQ">
                    <kbd *ngFor="let shortcut of item.shortcut" class="c-ddlVgM">{{
                      shortcut
                    }}</kbd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  public searchElementId = 'search-element-id';
  public isSearchModuleVisible = false;
  public generalItems: Array<SearchItem> = new Array<SearchItem>();
  public pageItems: Array<SearchItem> = new Array<SearchItem>();
  public generalCPItems: Array<SearchItem> = new Array<SearchItem>();
  public pageCPItems: Array<SearchItem> = new Array<SearchItem>();

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private shortcutService: ShortcutService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngAfterViewInit(): void {
    this.searchService.searchSubject.asObservable().subscribe((display: boolean) => {
      this.isSearchModuleVisible = display;

      if (this.isSearchModuleVisible) {
        this.initialize();
        this.cdr.detectChanges();
        this.searchInput.nativeElement.focus();
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const idElt = (event.target as HTMLElement).id;
    if (idElt !== null && idElt !== undefined && idElt === this.searchElementId) {
      this.searchService.hideSearchModule();
    }
  }

  handleClick(item: SearchItem): void {
    switch (item.name) {
      case 'link':
        this.shortcutService.handleKeyPress(
          new KeyboardEvent('keydown', {
            key: 'L',
            code: 'KeyL',
            keyCode: 76,
            which: 76,
            altKey: false,
            ctrlKey: false,
            shiftKey: false,
            metaKey: false,
          })
        );
        break;

      case SearchItemNames.SOURCE:
        window.open(item.link, '_blank');
        break;

      case SearchItemNames.HOME:
      case SearchItemNames.ABOUT:
      case SearchItemNames.ARTICLES:
      case SearchItemNames.CONTACT:
      case SearchItemNames.PROJECTS:
        this.searchService.hideSearchModule();
        this.router.navigate([item.name]);
        break;
    }
  }

  performSearch(event: Event): void {
    if (event !== null && event.target !== null) {
      const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
      this.generalCPItems = this.filterItems(this.generalItems, searchTerm);
      this.pageCPItems = this.filterItems(this.pageItems, searchTerm);
    }
  }

  filterItems(items: Array<SearchItem>, searchTerm: string): Array<SearchItem> {
    return items.filter((result) => result.label.toLowerCase().includes(searchTerm));
  }

  private initialize(): void {
    this.generateItemList();
    this.pageItemsList();
  }

  private pageItemsList(): void {
    this.pageItems = [];
    this.pageItems.push(
      {
        name: SearchItemNames.HOME,
        src: '/src/assets/svg/home.svg',
        label: `Home`,
        shortcut: [SearchItemShortcuts.HOME],
      },
      {
        name: SearchItemNames.ABOUT,
        src: '/src/assets/svg/about.svg',
        label: `About`,
        shortcut: [SearchItemShortcuts.ABOUT],
      },
      {
        name: SearchItemNames.ARTICLES,
        src: '/src/assets/svg/articles.svg',
        label: `Articles`,
        shortcut: [SearchItemShortcuts.ARTICLES],
      },
      {
        name: SearchItemNames.PROJECTS,
        src: '/src/assets/svg/projects.svg',
        label: `Projects`,
        shortcut: [SearchItemShortcuts.PROJECTS],
      }
    );
    this.pageCPItems = this.pageItems;
  }

  private generateItemList(): void {
    this.generalItems = [];
    this.generalItems.push(
      {
        name: SearchItemNames.LINK,
        src: '/src/assets/svg/link.svg',
        label: `Copy link`,
        shortcut: [SearchItemShortcuts.LINK],
      },
      {
        name: SearchItemNames.CONTACT,
        src: '/src/assets/svg/contact.svg',
        label: `Send email`,
        shortcut: [SearchItemShortcuts.CONTACT],
      },
      {
        name: SearchItemNames.SOURCE,
        src: '/src/assets/svg/source.svg',
        label: `View source`,
        link: 'https://github.com/pxradox/mulume.dev',
        shortcut: [SearchItemShortcuts.SOURCE],
      }
    );
    this.generalCPItems = this.generalItems;
  }
}
