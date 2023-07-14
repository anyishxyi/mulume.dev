import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Jean-Paul NGALULA</h1>
      <p><strong>Ingénieur logiciel chez <a href="https://capgemini.com" target="blank">Capgemini</a></strong>
      <br>
      Intéressé par le craftmanship</p>
      <button class="c-gfjkKg">Appuyez sur <kbd>ctrl</kbd> <kbd>K</kbd> pour commencer →</button>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
