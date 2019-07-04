import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagos'
})
export class PagosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (value != null) {
      const result = [];
      if (arg === '') {
        return value;
      } else {

        for (const pago of value) {
          if (pago.usuario.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            result.push(pago);
          }
        };
        return result;
      }

    }



  }

}
