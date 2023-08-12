import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { SearchItem } from './search-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngIf="isSearchModuleVisible" class="c-hWUbGb">
    <div class="c-iqTopT">
      <div>
        <input placeholder="Type a command or search…" class="c-ekIDDi" autocomplete="off" role="combobox" spellcheck="false" aria-expanded="true" aria-controls="kbar-listbox" aria-activedescendant="kbar-listbox-item-1">
        <div class="c-ertyu">
          <div role="listbox" id="kbar-listbox" class="c-oeiotf">
            <div id="kbar-listbox-item-0" role="option" aria-selected="false" class="c-title">
              <div class="c-kcmNSe">General</div>
            </div>
            <div *ngFor="let item of generalItems" (click)="handleClick(item)" role="option" aria-selected="true" class="c-condee">
              <div class="PJLV-iljSPlw-css">
                <div class="c-eSulSs">
                  <div class="c-imgsize">
                    <img alt="link" class="c-imgsize" aria-hidden="true" [src]="item.src" loading="lazy">
                  </div>
                  <div class="c-fixGjY">
                    <span>{{ item.label }}</span>
                  </div>
                </div>
                <div aria-hidden="true" class="c-jpnQgQ">
                  <kbd *ngFor="let shortcut of item.shortcut" class="c-ddlVgM">{{ shortcut }}</kbd>
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
export class SearchComponent implements OnInit {
  public search$: Observable<boolean> | undefined;
  public isSearchModuleVisible: Boolean = false;
  public searchTerm: string = '';
  public searchResults: string[] = ['home', 'about', 'contact'];
  public generalItems: Array<SearchItem> = [];

  constructor(private router: Router, private searchService: SearchService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.searchService.searchSubject.asObservable().subscribe((display: boolean) => {
      this.isSearchModuleVisible = display;
    });

    this.generateItemList();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.searchService.hideSearchModule();
    }
  }

  performSearch() {
    this.searchResults = this.filterResults(this.searchTerm);
  }

  filterResults(searchTerm: string): string[] {
    return this.searchResults.filter(result => result.includes(searchTerm));
  }

  handleClick(item: SearchItem): void {
    switch (item.name) {
      case "link":
        break;

      case "source":
        window.open(item.link, '_blank');
        break;

      case "contact":
        this.searchService.hideSearchModule();
        this.router.navigate(["contact"]);
        break;
    }
  }

  private generateItemList(): void {
    this.generalItems.push(
      {
        name: "link",
        src: "../../../assets/svg/link.svg",
        label: "Copier le lien",
        shortcut: ["L"]
      },
      {
        name: "contact",
        src: "../../../assets/svg/contact.svg",
        label: "Envoyer un email",
        shortcut: ["E"]
      },
      {
        name: "source",
        src: "../../../assets/svg/source.svg",
        label: "Code source",
        link: "https://github.com/pxradox/portfolio",
        shortcut: ["S"]
      },
    )
  }
}
