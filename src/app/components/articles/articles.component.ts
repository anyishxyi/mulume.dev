import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="c-cUWjlu c-cUWjlu-iepuTsq-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icWhawk-css">Stories. Updates. Guides.</h1>
          <div>
            <p>
              Here you can find all the <strong>{{ countArticles }}</strong> articles I wrote. You
              can read about web development, software engineering and tech career.
            </p>
            <h2>All Articles</h2>
            <table id="content" class="mt-12 w-full border-collapse text-left">
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  countArticles: number = 0;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<{ count: number }>('/api/articles').subscribe((data) => {
      this.countArticles = data.count;
    });
  }
}
