import { Pipe, PipeTransform } from '@angular/core';
import { FormatArticle } from './format-article';

@Pipe({
  name: 'formatArticles',
  standalone: true,
})
export class FormatArticlesPipe implements PipeTransform {
  transform(articles: string[]): FormatArticle[] {
    const articlesWithDates: FormatArticle[] = articles.map((article) => {
      const parts = article.split('_');
      const potentialDate = parts.pop();
      const timestamp = potentialDate?.split('.').shift();

      let parsedDate: Date | null = null;
      if (timestamp) {
        parsedDate = new Date(Number(timestamp));
      }

      return { title: parts[0], date: parsedDate };
    });

    // Sort by parsed date (null values go to the end):
    articlesWithDates.sort((a, b) => {
      if (a.date === null && b.date === null) {
        return 0; // Both are invalid, keep order
      } else if (a.date === null) {
        return 1; // Invalid comes after valid
      } else if (b.date === null) {
        return -1; // Valid comes before invalid
      }
      return b.date.getTime() - a.date.getTime();
    });

    return articlesWithDates;
  }
}
