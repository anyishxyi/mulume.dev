import { Pipe, PipeTransform } from '@angular/core';
import PostAttributes from '../pages/blog/post-attributes';
import { ContentFile } from '@analogjs/content';

@Pipe({
  name: 'sortPosts',
  standalone: true,
})
export class SortPostsPipe implements PipeTransform {
  transform(posts: Array<ContentFile<PostAttributes>>): Array<ContentFile<PostAttributes>> {
    return posts.sort(
      (a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime()
    );
  }
}
