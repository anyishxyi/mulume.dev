import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { SortPostsPipe } from '../../pipe/sort-posts.pipe';
import PostAttributes from './post-attributes';

export const routeMeta: RouteMeta = {
  title: 'Blog // Jean-Paul NGALULA',
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SortPostsPipe, DatePipe],
  template: `
    <main class="c-cUWjlu c-cUWjlu-iepuTsq-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icWhawk-css">Stories. Updates. Guides.</h1>
          <div>
            <p>
              Here you can find all the <strong>{{ posts.length }}</strong> posts I wrote. You can
              read about web development, software engineering and tech career.
            </p>
            <h2>All Posts</h2>
            <ul id="content" class="mt-12 w-full border-collapse text-left">
              @for (post of posts | sortPosts; track post.attributes.slug) {
                <li class="c-ixeOpV">
                  <span class="c-fSaYMf" (click)="showPostDetail(post.attributes.slug)">
                    <span class="c-jXjAdA">{{ formatArticleTitle(post.attributes.title) }}</span>
                    <span class="c-gpWHDs">{{ post.attributes.date | date: 'mediumDate' }}</span>
                  </span>
                </li>
              }
            </ul>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./blog.page.scss'],
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>();

  constructor(private router: Router) {}

  showPostDetail(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }

  formatArticleTitle(title: string): string {
    const word = title.split('-').toString().replace(/,/g, ' ');
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
