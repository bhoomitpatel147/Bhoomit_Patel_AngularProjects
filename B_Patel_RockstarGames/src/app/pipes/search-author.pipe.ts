import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';
@Pipe({
  name: 'searchAuthor'
})
export class SearchAuthorPipe implements PipeTransform {

  transform(contentItem: Content[], searchAuthorName: string) {
    return null;
  }



}
