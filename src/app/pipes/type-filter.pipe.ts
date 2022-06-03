import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contetItem: Content[], optionalStr?: string): Content[] {
    return contetItem.filter
      (individualContent => {
        return optionalStr == individualContent.type;
      });
  }

}
