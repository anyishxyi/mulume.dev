import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import PostAttributes from './post-attributes';

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
    }
  `,
  styleUrls: ['./post.page.scss'],
})
export default class PostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
