import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { Article } from './article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  providers: [provideMarkdown()],
  template: `
    <div class="parallax" [style.background-image]="'url(' + article.bgImage + ')'">
      <h1 class="c-cnxBZg c-jEusvl">{{ article.title }}</h1>
      <h2 class="c-hAKjjp c-hZAbru">
        <time>{{ article.date | date: 'mediumDate' }}</time>
        <span> • </span>
        <span class="" [innerHTML]="article.bgCredit"></span>
      </h2>
    </div>
    <div class="article-body">
      <markdown [data]="article.content" class="article-content"></markdown>
    </div>
  `,
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article = {
    bgCredit: '',
    bgImage: '',
    content: '',
    date: new Date(),
    title: '',
  };
  artitleSubString: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  async ngOnInit(): Promise<void> {
    this.getArticleBackground();
    await this.getArticle();
  }

  getArticleBackground(): void {
    this.route.paramMap.subscribe((params) => {
      this.artitleSubString = params.get('id');
      if (this.artitleSubString) {
        this.article.bgImage = `/img/${this.artitleSubString}.jpg`;
      }
    });
  }

  async getArticle(): Promise<void> {
    if (this.artitleSubString) {
      const response: Article | undefined = await this.http
        .get<Article>('/api/articles/find', {
          params: { title: this.artitleSubString },
          responseType: 'json',
        })
        .toPromise();

      if (response) {
        this.article.content = response.content;
        this.article.date = new Date(Number(response.date));
        this.article.title = response.title;
        this.article.bgCredit = response.bgCredit;
      }
    }
  }

  customTransform(html: string): string {
    return html.replace('<p>', '<p class="p-casaersz">');
  }
}
