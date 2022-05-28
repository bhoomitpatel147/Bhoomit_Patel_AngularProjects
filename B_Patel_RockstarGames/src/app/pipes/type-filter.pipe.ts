import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contetItem: Content[], optionalStr: string = "Sports"): Content[] {
    return contetItem.filter
      (individualContent => {
        return !individualContent.type?.length || individualContent.type === optionalStr;
      });;
  }

}
