import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="c-dRmGAT">
      <a (click)="navigateTo('home')" class="c-gfsRMa c-eEqOQi">Ng</a>
      <nav class="c-cGucJb">
        <ul class="c-hRSBvv">
          <li>
            <a (click)="navigateTo('about')" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="7">A propos</span>
            </a>
          </li>
          <li>
            <a (click)="navigateTo('contact')" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="9">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="c-cXvxHo">
        <button type="button" aria-label="Command" class="c-gfsRMa c-gfsRMa-ieTYVcq-css">
          <i class="c-fhGAOp ri-command-line"></i>
        </button>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  navigateTo(page: string): void {
    this.pageChange.emit(page);
  }
}
