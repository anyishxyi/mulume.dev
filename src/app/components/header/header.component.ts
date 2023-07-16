import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="c-dRmGAT">
      <a href="/" class="c-gfsRMa c-eEqOQi">Ng</a>
      <nav class="c-cGucJb">
        <ul class="c-hRSBvv">
          <li>
            <a href="/about" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="7">About</span>
            </a>
          </li>
          <li>
            <a href="/articles" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="8">Articles</span>
            </a>
          </li>
          <li>
            <a href="/projects" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="9">Projects</span>
            </a>
          </li>
          <li>
            <a href="/talks" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="10">Talks</span>
            </a>
          </li>
          <li>
            <a href="/podcasts" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="11">Podcasts</span>
            </a>
          </li>
          <li>
            <a href="/investing" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="12">Investing</span>
            </a>
          </li>
          <li>
            <a href="/uses" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="13">Uses</span>
            </a>
          </li>
          <li>
            <a href="/reminder" class="c-gKCiCk">
              <span class="c-cohhyn" data-projection-id="14">Reminder</span>
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

  changePage(page: string): void {
    this.pageChange.emit(page);
  }
}
