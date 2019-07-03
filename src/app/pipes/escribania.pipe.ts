import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escribania'
})
export class EscribaniaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
