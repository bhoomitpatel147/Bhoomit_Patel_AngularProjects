import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contetItem: Content[], optionalStr?: string): Content[] {
    return contetItem.filter
      (individualContent => {
        if (optionalStr) {
          return optionalStr == individualContent.type;
        }
        return !individualContent.type;
      }
      );
  }

}
