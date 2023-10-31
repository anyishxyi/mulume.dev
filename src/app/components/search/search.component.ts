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
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { SearchItem } from './search-item';
import { Router } from '@angular/router';
import { ShortcutService } from 'src/app/services/shortcut.service';

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
            i18n-placeholder
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
                <div class="c-kcmNSe" i18n>General</div>
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
                <div class="c-kcmNSe" i18n>Go to</div>
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
  public search$: Observable<boolean> | undefined;
  public isSearchModuleVisible = false;
  public searchTerm = '';
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

      case 'source':
        window.open(item.link, '_blank');
        break;

      case 'home':
      case 'about':
      case 'contact':
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

  private initialize(): void {
    this.generateItemList();
    this.pageItemsList();
  }

  private filterItems(items: Array<SearchItem>, searchTerm: string): Array<SearchItem> {
    return items.filter((result) => result.label.toLowerCase().includes(searchTerm));
  }

  private pageItemsList(): void {
    this.pageItems = [];
    this.pageItems.push(
      {
        name: 'home',
        src: '../../../assets/svg/home.svg',
        label: $localize`Home`,
        shortcut: ['H'],
      },
      {
        name: 'about',
        src: '../../../assets/svg/about.svg',
        label: $localize`About`,
        shortcut: ['A'],
      }
    );
    this.pageCPItems = this.pageItems;
  }

  private generateItemList(): void {
    this.generalItems = [];
    this.generalItems.push(
      {
        name: 'link',
        src: '../../../assets/svg/link.svg',
        label: $localize`Copy link`,
        shortcut: ['L'],
      },
      {
        name: 'contact',
        src: '../../../assets/svg/contact.svg',
        label: $localize`Send email`,
        shortcut: ['C'],
      },
      {
        name: 'source',
        src: '../../../assets/svg/source.svg',
        label: $localize`View source`,
        link: 'https://github.com/pxradox/mulume',
        shortcut: ['S'],
      }
    );
    this.generalCPItems = this.generalItems;
  }
}
