import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SearchItem, SearchItemNames, SearchItemShortcuts } from './search-item';
import { ShortcutService } from '../../services/shortcut.service';

@Component({
  selector: 'app-search',
  standalone: true,
  template: `
    @if (isSearchModuleVisible) {
      <div id="{{ searchElementId }}" class="c-hWUbGb">
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
                @if (generalCPItems.length > 0) {
                  <div class="c-title">
                    <div class="c-kcmNSe">General</div>
                  </div>
                }
                @for (item of generalCPItems; track item.name) {
                  <div
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
                        @for (shortcut of item.shortcut; track $index) {
                          <kbd class="c-ddlVgM">{{ shortcut }}</kbd>
                        }
                      </div>
                    </div>
                  </div>
                }
                @if (pageCPItems.length > 0) {
                  <div class="c-title">
                    <div class="c-kcmNSe">Go to</div>
                  </div>
                }
                @for (item of pageCPItems; track item.name) {
                  <div
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
                        @for (shortcut of item.shortcut; track $index) {
                          <kbd class="c-ddlVgM">{{ shortcut }}</kbd>
                        }
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    }
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
        this.searchService.hideSearchModule();
        this.router.navigate(['/']);
        break;

      case SearchItemNames.ABOUT:
      case SearchItemNames.BLOG:
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
        src: '/svg/home.svg',
        label: `Home`,
        shortcut: [SearchItemShortcuts.HOME],
      },
      {
        name: SearchItemNames.ABOUT,
        src: '/svg/about.svg',
        label: `About`,
        shortcut: [SearchItemShortcuts.ABOUT],
      },
      {
        name: SearchItemNames.BLOG,
        src: '/svg/blog.svg',
        label: `Blog`,
        shortcut: [SearchItemShortcuts.BLOG],
      },
      {
        name: SearchItemNames.PROJECTS,
        src: '/svg/projects.svg',
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
        src: '/svg/link.svg',
        label: `Copy link`,
        shortcut: [SearchItemShortcuts.LINK],
      },
      {
        name: SearchItemNames.CONTACT,
        src: '/svg/contact.svg',
        label: `Send email`,
        shortcut: [SearchItemShortcuts.CONTACT],
      },
      {
        name: SearchItemNames.SOURCE,
        src: '/svg/source.svg',
        label: `View source`,
        link: 'https://github.com/pxradox/mulume.dev',
        shortcut: [SearchItemShortcuts.SOURCE],
      }
    );
    this.generalCPItems = this.generalItems;
  }
}
