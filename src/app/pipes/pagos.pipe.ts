import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagos'
})
export class PagosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
