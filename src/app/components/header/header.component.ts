import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
   <nav class="navbar">
      <div class="navbar-left">
        <a href="#"><i class="fa fa-home"></i> JP </a>
      </div>
      <div class="navbar-menu">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="navbar-right">
        <a href="#"><i class="fa fa-user"></i> R </a>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  changePage(page: string): void {
    this.pageChange.emit(page);
  }
}
