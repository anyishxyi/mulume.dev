import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="c-fOYOSN">
      <a (click)="navigateTo('contact')" (keyup)="navigateTo('contact')" class="c-iFbaKH" tabindex="0">
        <span class="c-heOjaG">Email</span><i class="c-dRBBau ri-mail-line"></i>
      </a>
      <a href="https://github.com/pxradox" target="_blank" class="c-iFbaKH">
        <span class="c-heOjaG">GitHub</span><i class="c-dRBBau ri-github-line"></i>
      </a>
      <a href="https://linkedin.com/in/jeanpaulngalula" target="_blank" class="c-iFbaKH">
        <span class="c-heOjaG">linkedin</span><i class="c-dRBBau ri-linkedin-line"></i>
      </a>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  navigateTo(page: string): void {
    this.pageChange.emit(page);
  }
}
