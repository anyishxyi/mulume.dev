import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ul>
    <li><a (click)="changePage('home')">Home</a></li>
    <li><a (click)="changePage('contact')">Contact</a></li>
    <li><a (click)="changePage('about')">About</a></li>
  </ul>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  changePage(page: string): void {
    this.pageChange.emit(page);
  }
}
