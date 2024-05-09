import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ContentFile, injectContent, MarkdownComponent } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import PostAttributes from './post-attributes';
import { Observable, tap } from 'rxjs';

export const routeMeta: RouteMeta = {
  title: 'Post // Jean-Paul NGALULA',
};

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
      <article
        class="parallax"
        [style.background-image]="'url(' + post.attributes.coverImage + ')'">
        <h1 class="c-cnxBZg c-jEusvl">{{ post.attributes.title }}</h1>
        <h2 class="c-hAKjjp c-hZAbru">
          <time>{{ post.attributes.date | date: 'mediumDate' }}</time>
          <span> • </span>
          <span class="" [innerHTML]="post.attributes.coverCredit"></span>
        </h2>
      </article>
      <div class="article-body">
        <analog-markdown class="article-content" [content]="post.content"></analog-markdown>
      </div>
      <div #comments></div>
    }
  `,
  styleUrls: ['./post.page.scss'],
})
export default class PostComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  post$: Observable<ContentFile> | null = null;
  comments = viewChild<ElementRef>('comments');

  addCommentsEffect = effect(() => {
    if (!this.comments()?.nativeElement) return;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'anyishxyi/mulume.dev');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'dark-blue');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    this.comments()?.nativeElement.appendChild(script);
  });

  constructor() {
    this.post$ = injectContent<PostAttributes>().pipe(
      tap(({ attributes: { title, description, coverImage } }) => {
        this.title.setTitle(title);
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ name: 'og:description', content: description });
        this.meta.updateTag({ name: 'og:image', content: coverImage });
        this.meta.updateTag({ name: 'og:title', content: title });
      })
    );
  }
}
