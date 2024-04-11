import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  providers: [provideMarkdown()],
  template: `
    <main>
      <section class="c-EnlPs">
        <div class="c-ekdbvK" [style.background-image]="'url(' + articleBackgroundImage + ')'">
          <div class="article-header">
            <h1>{{ articleTitle }}</h1>
          </div>
        </div>
        <div class="article-body">
          <markdown [data]="articleContent"></markdown>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articleID = 'article-example_1706396400000';
  articleTitle: string = 'Thats my title';
  articleBackgroundImage: string = '';
  articleContent: string | undefined = '# Test';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  async ngOnInit(): Promise<void> {
    this.getArticleTitle();
    await this.loadMarkdownContent();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.pageYOffset;
    const background = document.querySelector('.c-ekdbvK') as HTMLElement; // Spécifiez le type HTMLElement
    if (background) {
      background.style.backgroundPositionY = -offset * 0.5 + 'px';
    }
  }

  getArticleTitle(): void {
    this.route.paramMap.subscribe((params) => {
      const title = params.get('id');
      if (title) {
        this.articleBackgroundImage = `assets/img/${title}.jpeg`;
        this.articleTitle = this.formatArticleTitle(title);
      }
    });
  }

  formatArticleTitle(title: string) {
    const word = title.split('-').toString().replace(/,/g, ' ');
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  async loadMarkdownContent(): Promise<void> {
    const markdownPath = `assets/articles/${this.articleID}.md`;
    this.articleContent = await this.http.get(markdownPath, { responseType: 'text' }).toPromise();
  }
}
