import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


interface Link {
  name: string,
  label: string; // display name
  bgColor: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="c-dRmGAT">
      <a (click)="navigateTo('home')" class="c-gfsRMa c-eEqOQi">M</a>
      <nav class="c-cGucJb">
        <ul class="c-hRSBvv">
          <li *ngFor="let link of links">
            <a (click)="navigateTo(link.name)" class="c-gKCiCk">
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
  private linkStates: { [name: string]: boolean } = {};
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  constructor(private searchService: SearchService) {}

  displaySearchModule(event: Event) {
    event.stopPropagation();
    this.searchService.showSearchModule();
  }

  createLink(name: string, label: string): Link {
    return { name, label, bgColor: this.linkStates[name] ? '#f0f0f0' : 'transparent' };
  }

  links: Link[] = [
    this.createLink('about', 'À propos'),
    this.createLink('contact', 'Contact')
  ];

  navigateTo(page: string): void {
    this.pageChange.emit(page);
  }

  onLinkMouseEnter(link: Link) {
    link.bgColor = '#f0f0f0'; // Change the background color when hovering over the link
  }

  onLinkMouseLeave(link: Link) {
    link.bgColor = 'transparent'; // Change the background color back to transparent when leaving the link
  }

  onLinkMouseMove(event: MouseEvent) {
    const movement = 20; // Adjust this value for the desired movement effect

    for (const link of this.links) {
      const linkElement = event.target as HTMLElement;
      const linkRect = linkElement.getBoundingClientRect();
      const linkCenterX = linkRect.left + linkRect.width / 2;
      const linkCenterY = linkRect.top + linkRect.height / 2;

      const offsetX = (linkCenterX - event.clientX) / movement;
      const offsetY = (linkCenterY - event.clientY) / movement;

      const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
      link.bgColor = `rgba(240, 240, 240, ${1 - Math.min(distance, 1)})`;
    }
  }
}
