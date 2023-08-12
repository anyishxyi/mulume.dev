import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchSubject = new Subject<boolean>();
  private isDisplayed: boolean = false;

  showSearchModule() {
    this.isDisplayed = !this.isDisplayed;
    this.searchSubject.next(this.isDisplayed);
  }

  hideSearchModule() {
    this.isDisplayed = false;
    this.searchSubject.next(this.isDisplayed);
  }
}
