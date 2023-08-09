import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchSubject = new Subject<boolean>();

  showSearchModule(display: boolean) {
    this.searchSubject.next(display);
  }
}
