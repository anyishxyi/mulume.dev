import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormatArticlesPipe } from '../../pipe/format-articles.pipe';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormatArticlesPipe, DatePipe],
  template: `
    <main class="c-cUWjlu c-cUWjlu-iepuTsq-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icWhawk-css">Stories. Updates. Guides.</h1>
          <div>
            <p>
              Here you can find all the <strong>{{ articles.length }}</strong> articles I wrote. You
              can read about web development, software engineering and tech career.
            </p>
            <h2>All Articles</h2>
            <ul id="content" class="mt-12 w-full border-collapse text-left">
              <li class="c-ixeOpV" *ngFor="let article of articles | formatArticles">
                <span class="c-fSaYMf" (click)="showArticleDetail(article.title, article.date)">
                  <span class="c-jXjAdA">{{ formatArticleTitle(article.title) }}</span>
                  <span class="c-gpWHDs">{{ article.date | date: 'mediumDate' }}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: string[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.getArticles();
  }

  showArticleDetail(title: string, date: Date | null): void {
    this.router.navigate(['/article', title], { info: [date] });
  }

  formatArticleTitle(title: string) {
    const word = title.split('-').toString().replace(/,/g, ' ');
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  getArticles(): void {
    this.http.get<{ files: string[] }>('/api/articles/all').subscribe((data) => {
      this.articles = data.files;
    });
  }
}
