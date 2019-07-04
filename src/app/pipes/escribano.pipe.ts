import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escribano'
})
export class EscribanoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
