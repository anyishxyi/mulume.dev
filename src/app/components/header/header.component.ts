import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

interface Link {
  name: string,
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="c-dRmGAT">
      <a (click)="navigateTo('home')" (keyup)="navigateTo('home')" class="c-gfsRMa c-eEqOQi" tabindex="0">M</a>
      <nav class="c-cGucJb">
        <ul class="c-hRSBvv">
          <li *ngFor="let link of links">
            <a (click)="navigateTo(link.name)" (keyup)="navigateTo(link.name)" class="c-gKCiCk" tabindex="1">
              <span class="c-cohhyn" data-projection-id="7">{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="c-cXvxHo">
        <button (click)="displaySearchModule($event)" type="button" aria-label="Command" class="c-gfsRMa c-gfsRMa-ieTYVcq-css">
          <i class="c-fhGAOp ri-command-line"></i>
        </button>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  constructor(private searchService: SearchService) {}

  displaySearchModule(event: Event) {
    event.stopPropagation();
    this.searchService.showSearchModule();
  }

  links: Link[] = [
    {
      name: 'about',
      label:  $localize`About`,
    },
    {
      name: 'contact',
      label:  $localize`Contact`,
    }
  ];

  navigateTo(page: string): void {
    this.pageChange.emit(page);
  }
}
