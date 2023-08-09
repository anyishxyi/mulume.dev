import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isSearchModuleVisible" class="container">
      <div class="search-container">
        <input type="text" (input)="performSearch()" placeholder="Search...">
        <ul>
          <!-- <li *ngFor="let result of searchResults" (click)="navigateToPage(result)">{{ result }}</li> -->
        </ul>
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

  constructor(private searchService: SearchService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.searchService.searchSubject.asObservable().subscribe((display: boolean) => {
      this.isSearchModuleVisible = display;
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.searchService.showSearchModule(false);
    }
  }

  performSearch() {
    this.searchResults = this.filterResults(this.searchTerm);
  }

  filterResults(searchTerm: string): string[] {
    return this.searchResults.filter(result => result.includes(searchTerm));
  }
}
