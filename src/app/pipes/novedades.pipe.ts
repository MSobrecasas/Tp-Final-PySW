import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'novedades'
})
export class NovedadesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
