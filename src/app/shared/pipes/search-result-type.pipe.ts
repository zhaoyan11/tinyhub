import { Pipe, PipeTransform } from '@angular/core';
import { ResultType } from '../constants';

@Pipe({
  name: 'searchResultType'
})
export class SearchResultTypePipe implements PipeTransform {

  transform(key: string): string {
    let result = key;
    for (const item of ResultType) {
      if (item.symbol === key) {
         result = item.label;
         break;
      }
    }

    return result;
  }
}
